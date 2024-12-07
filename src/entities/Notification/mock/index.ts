const MockNotifications = new Array(10).fill(0).map((_, index) => {
  return {
    id: index,
    title: `Notification title ${index}`,
    description: `notification description${index}`,
    href: '',
  };
});

export default MockNotifications;
