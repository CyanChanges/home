import version from '#build/build-version.ts'

export interface VersionInfo {
    major: string,
    minor: number,
    commit: string
}

export function useVersion(): VersionInfo {
    return version
}
