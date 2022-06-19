export type ActionModule=typeof import('./constants')
export type Action=ActionModule[keyof ActionModule]
