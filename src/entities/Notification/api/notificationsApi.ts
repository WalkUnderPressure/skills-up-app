import rtkApi from 'shared/api/rtkApi';
import { Notification } from '../model/types/NotificationStateSchema';

// const NOTIFICATIONS_REFRESH_INTERVAL = 10_000;
const NOTIFICATIONS_REFRESH_INTERVAL = 60_000;
const NOTIFICATIONS_COUNT = 10;

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Array<Notification>, unknown>({
      query: () => ({
        url: '/notifications/',
        params: {
          _limit: NOTIFICATIONS_COUNT,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetNotificationsQuery: useNotifications } = notificationsApi;
export { NOTIFICATIONS_REFRESH_INTERVAL };
