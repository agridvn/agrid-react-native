import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Agrid, AgridOptions } from './agrid-rn';
import { AgridAutocaptureOptions } from './types';
/**
 * Props for the AgridProvider component.
 *
 * @public
 */
export interface AgridProviderProps {
    /** The child components to render within the Agrid context */
    children: React.ReactNode;
    /** Agrid configuration options */
    options?: AgridOptions;
    /** Your Agrid API key */
    apiKey?: string;
    /** An existing Agrid client instance */
    client?: Agrid;
    /** Autocapture configuration - can be a boolean or detailed options */
    autocapture?: boolean | AgridAutocaptureOptions;
    /** Enable debug mode for additional logging */
    debug?: boolean;
    /** Custom styles for the provider wrapper View */
    style?: StyleProp<ViewStyle>;
}
/**
 * AgridProvider is a React component that provides Agrid functionality to your React Native app. You can find all configuration options in the [React Native SDK docs](https://agrid.com/docs/libraries/react-native#configuration-options).
 *
 * Autocapturing navigation requires further configuration. See the [React Native SDK navigation docs](https://agrid.com/docs/libraries/react-native#capturing-screen-views)
 * for more information about autocapturing navigation.
 *
 * This is the recommended way to set up Agrid for React Native. This utilizes the Context API to pass the Agrid client around, enable autocapture.
 *
 * {@label Initialization}
 *
 * @example
 * ```jsx
 * // Add to App.(js|ts)
 * import { useAgrid, AgridProvider } from 'agrid-react-native'
 *
 * export function MyApp() {
 *     return (
 *         <AgridProvider apiKey="<ph_project_api_key>" options={{
 *             host: '<ph_client_api_host>',
 *         }}>
 *             <MyComponent />
 *         </AgridProvider>
 *     )
 * }
 *
 * // And access the Agrid client via the useAgrid hook
 * import { useAgrid } from 'agrid-react-native'
 *
 * const MyComponent = () => {
 *     const agrid = useAgrid()
 *
 *     useEffect(() => {
 *         agrid.capture("event_name")
 *     }, [agrid])
 * }
 *
 * ```
 *
 * @example
 * ```jsx
 * // Using with existing client
 * import { Agrid } from 'agrid-react-native'
 *
 * const agrid = new Agrid('<ph_project_api_key>', {
 *     host: '<ph_client_api_host>'
 * })
 *
 * export function MyApp() {
 *     return (
 *         <AgridProvider client={agrid}>
 *             <MyComponent />
 *         </AgridProvider>
 *     )
 * }
 * ```
 *
 * @public
 *
 * @param props - The AgridProvider props
 */
export declare const AgridProvider: ({ children, client, options, apiKey, autocapture, style, debug, }: AgridProviderProps) => JSX.Element | null;
