import {
  IdConfiguration,
  MomentListener,
  GsiButtonConfiguration,
} from "@/interfaces/accounts";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (input: IdConfiguration) => void;
          prompt: (momentListener?: MomentListener) => void;
          renderButton: (
            parent: HTMLElement,
            options: GsiButtonConfiguration,
            clickHandler?: () => void
          ) => void;
          disableAutoSelect: () => void;
          storeCredential: (
            credential: { id: string; password: string },
            callback?: () => void
          ) => void;
          cancel: () => void;
          onGoogleLibraryLoad: () => void;
          revoke: (accessToken: string, done: () => void) => void;
        };
        oauth2: {
          initTokenClient: (config: TokenClientConfig) => {
            requestAccessToken: (
              overridableClientConfig?: OverridableTokenClientConfig
            ) => void;
          };
          initCodeClient: (config: CodeClientConfig) => {
            requestCode: () => void;
          };
          hasGrantedAnyScope: (
            tokenRsponse: TokenResponse,
            firstScope: string,
            ...restScopes: string[]
          ) => boolean;
          hasGrantedAllScopes: (
            tokenRsponse: TokenResponse,
            firstScope: string,
            ...restScopes: string[]
          ) => boolean;
          revoke: (accessToken: string, done?: () => void) => void;
        };
      };
    };
  }
}
