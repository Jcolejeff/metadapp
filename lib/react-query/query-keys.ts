export const workspaceKeys = {
  all: ['workspaces'] as const,
  lists: () => [...workspaceKeys.all, 'list'] as const,
  list: (...filters: string[]) => [...workspaceKeys.all, 'list', { ...filters }] as const,
  details: () => [...workspaceKeys.all, 'detail'] as const,
  detail: (id: string) => [...workspaceKeys.details(), id] as const,
};

export const facilityKeys = {
  all: ['facilities'] as const,
  lists: () => [...facilityKeys.all, 'list'] as const,
  list: (...filters: string[]) => [...facilityKeys.all, 'list', { ...filters }] as const,
  details: () => [...facilityKeys.all, 'detail'] as const,
  detail: (id: string) => [...facilityKeys.details(), id] as const,
};

export const assetKeys = {
  all: ['assets'] as const,
  lists: () => [...assetKeys.all, 'list'] as const,
  list: (...filters: string[]) => [...assetKeys.all, 'list', { ...filters }] as const,
  details: () => [...assetKeys.all, 'detail'] as const,
  detail: (id: string) => [...assetKeys.details(), id] as const,
};

export const issueKeys = {
  all: ['issues'] as const,
  lists: () => [...issueKeys.all, 'list'] as const,
  list: (...filters: string[]) => [...issueKeys.all, 'list', { ...filters }] as const,
  details: () => [...issueKeys.all, 'detail'] as const,
  detail: (id: string) => [...issueKeys.details(), id] as const,
};

export const workspaceUserKeys = {
  all: ['workspace-users'] as const,
  lists: () => [...workspaceUserKeys.all, 'list'] as const,
  list: (...filters: string[]) => [...workspaceUserKeys.all, 'list', { ...filters }] as const,
  details: () => [...workspaceUserKeys.all, 'detail'] as const,
  detail: (id: string) => [...workspaceUserKeys.details(), id] as const,
};

export const workspaceInviteKeys = {
  all: ['workspace-invites'] as const,
  lists: () => [...workspaceInviteKeys.all, 'list'] as const,
  list: (...filters: string[]) => [...workspaceInviteKeys.all, 'list', { ...filters }] as const,
  details: () => [...workspaceInviteKeys.all, 'detail'] as const,
  detail: (id: string) => [...workspaceInviteKeys.details(), id] as const,
};

export const teamKeys = {
  all: ['teams'] as const,
  lists: () => [...teamKeys.all, 'list'] as const,
  list: (...filters: string[]) => [...teamKeys.all, 'list', { ...filters }] as const,
  details: () => [...teamKeys.all, 'detail'] as const,
  detail: (id: string) => [...teamKeys.details(), id] as const,
};
