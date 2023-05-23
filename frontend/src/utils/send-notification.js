const sendNotification = (message) => {
  electron.notificationApi.sendNotification(message);
};

export { sendNotification };
