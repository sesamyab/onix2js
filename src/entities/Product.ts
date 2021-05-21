enum NotificationType {
  EarlyNotification = 1,
  AdvanceNotification = 2,
  NotificationConfirmedOnPublication = 3,
  Update = 4,
  Delete = 5,
  NoticeOfSale = 8,
  NoticeOfAcquisition = 9,
  TestUpdate = 88,
  TestRecord = 89,
}

export class Product {
  constructor(productJson) {}
  notificationType: NotificationType;
}
