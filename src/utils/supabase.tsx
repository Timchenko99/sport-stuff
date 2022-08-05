import {
  createClient,
  RealtimeChannel,
  RealtimePresence,
  Session,
  SupabaseClient,
} from "@supabase/supabase-js";
import vanillaCreate from "zustand/vanilla";

import { useAtom } from 'jotai'
import { atomWithStore } from 'jotai/zustand'


interface SupabaseStore {
  supabaseClient: SupabaseClient
  // channel: RealtimeChannel
  // presence: RealtimePresence
}

interface SessionStore {
  session?: Session
}

const publicSupabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function createSupabaseStore() {
  // const channel = publicSupabaseClient.from

  return vanillaCreate<SupabaseStore>(() => {
    return {
      supabaseClient: publicSupabaseClient,
      // channel: RealtimeChannel,
      // presence
    };
  });
}

const sessionStore = vanillaCreate<SessionStore>(() => ({ session: undefined }))
const sessionAtom = atomWithStore(sessionStore)

import { StoreApi } from "zustand/vanilla";
import createContext from "zustand/context";

const { Provider: SupabaseStoreProvider, useStore: useSupabaseStore } =
  createContext<StoreApi<SupabaseStore>>();

import React from "react";

export const SupabaseProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [store, updateStore] =
    React.useState<ReturnType<typeof createSupabaseStore>>();

  //const [session, setSession] = React.useState<Session | null>();
  const [session, setSession] = useAtom(sessionAtom)


  React.useEffect(() => {
    const newStore = createSupabaseStore();
    updateStore(newStore);

    //setSession(newStore.getState().supabaseClient.auth.session())

    newStore.getState().supabaseClient.auth.onAuthStateChange((_event, session) => {
      console.log("auth state changes");
      
      if(session === null) return
      setSession((prev) => ({...prev, session: session}))
    })

    return () => {
      const supabase = newStore.getState().supabaseClient;
      console.log("disconnecting pusher and destroying store", supabase);
      console.log(
        "(Expect a warning in terminal after this, React Dev Mode and all)"
      );
      supabase.removeAllSubscriptions();
      newStore.destroy();
    };
  }, []);

  if (!store) {
    return null;
  }

  return (
    <SupabaseStoreProvider createStore={() => store}>
      {children}
    </SupabaseStoreProvider>
  );
};
/**
 * Section 3: "The Hooks"
 *
 * The exported hooks you use to interact with this store (in this case just an event sub)
 *
 * (I really want useEvent tbh)
 */
// export function useSubscribeToEvent<MessageType>(
//   eventName: string,
//   callback: (data: MessageType) => void
// ) {
//   const channel = useSupabaseStore((state) => state.channel);

//   const stableCallback = React.useRef(callback);

//   // Keep callback sync'd
//   React.useEffect(() => {
//     stableCallback.current = callback;
//   }, [callback]);

//   React.useEffect(() => {
//     const reference = (data: MessageType) => {
//       stableCallback.current(data);
//     };
//     channel.bindings.push();
//     channel.bind(eventName, reference);
//     return () => {
//       channel.unbind(eventName, reference);
//     };
//   }, [channel, eventName]);
// }

// export const useCurrentMemberCount = () =>
//   usePusherZustandStore((s) => s.members.size);

export const useAuth = () => useSupabaseStore((store) => store.supabaseClient.auth)
export const useSession = () => useAtom(sessionAtom)

