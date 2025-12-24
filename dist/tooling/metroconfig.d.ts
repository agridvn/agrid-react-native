import type { MetroConfig } from 'metro';
import type { DefaultConfigOptions } from './vendor/expo/expoconfig';
export * from './agridMetroSerializer';
export interface AgridMetroConfigOptions {
}
export interface AgridExpoConfigOptions {
    /**
     * Pass a custom `getDefaultConfig` function to override the default Expo configuration getter.
     */
    getDefaultConfig?: (projectRoot: string, options?: Record<string, unknown>) => Record<string, unknown>;
}
/**
 * This function returns Default Expo configuration with Agrid plugins.
 */
export declare function getAgridExpoConfig(projectRoot: string, options?: DefaultConfigOptions & AgridExpoConfigOptions & AgridMetroConfigOptions): MetroConfig;
