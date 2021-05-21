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

export default NotificationType;

// {
//     "CodeListNumber": 1,
//     "CodeListDescription": "Notification or update type",
//     "IssueNumber": 0,
//     "Code": [
//         {
//             "CodeValue": "01",
//             "CodeDescription": "Early notification",
//             "CodeNotes": "Use for a complete record issued earlier than approximately six months before publication",
//             "IssueNumber": 0
//         },
//         {
//             "CodeValue": "02",
//             "CodeDescription": "Advance notification (confirmed)",
//             "CodeNotes": "Use for a complete record issued to confirm advance information approximately six months before publication; or for a complete record issued after that date and before information has been confirmed from the book-in-hand",
//             "IssueNumber": 0
//         },
//         {
//             "CodeValue": "03",
//             "CodeDescription": "Notification confirmed on publication",
//             "CodeNotes": "Use for a complete record issued to confirm advance information at or just before actual publication date, usually from the book-in-hand, or for a complete record issued at any later date",
//             "IssueNumber": 0,
//             "ModifiedNumber": 11
//         },
//         {
//             "CodeValue": "04",
//             "CodeDescription": "Update (partial)",
//             "CodeNotes": "In ONIX 3.0 only, use when sending a ‘block update’ record. A block update implies using the supplied block(s) to update the existing record for the product, replacing only the blocks included in the block update, and leaving other blocks unchanged – for example, replacing old information from Blocks 4 and 6 with the newly-received data while retailing information from Blocks 1–3 and 5 untouched. In previous ONIX releases, and for ONIX 3.0 using other notification types, updating is by replacing the complete record with the newly-received data",
//             "IssueNumber": 0,
//             "ModifiedNumber": 42
//         },
//         {
//             "CodeValue": "05",
//             "CodeDescription": "Delete",
//             "CodeNotes": "Use when sending an instruction to delete a record which was previously issued. Note that a Delete instruction should NOT be used when a product is cancelled, put out of print, or otherwise withdrawn from sale: this should be handled as a change of Publishing status, leaving the receiver to decide whether to retain or delete the record. A Delete instruction is used ONLY when there is a particular reason to withdraw a record completely, eg because it was issued in error",
//             "IssueNumber": 0
//         },
//         {
//             "CodeValue": "08",
//             "CodeDescription": "Notice of sale",
//             "CodeNotes": "Notice of sale of a product, from one publisher to another: sent by the publisher disposing of the product",
//             "IssueNumber": 2
//         },
//         {
//             "CodeValue": "09",
//             "CodeDescription": "Notice of acquisition",
//             "CodeNotes": "Notice of acquisition of a product, by one publisher from another: sent by the acquiring publisher",
//             "IssueNumber": 2
//         },
//         {
//             "CodeValue": 88,
//             "CodeDescription": "Test update (Partial)",
//             "CodeNotes": "ONIX 3.0 only. Record may be processed for test purposes, but data should be discarded when testing is complete. Sender must ensure the <RecordReference> matches a previously-sent Test record",
//             "IssueNumber": 26
//         },
//         {
//             "CodeValue": 89,
//             "CodeDescription": "Test record",
//             "CodeNotes": "Record may be processed for test purposes, but data should be discarded when testing is complete. Sender must ensure the <RecordReference> does not match any previously-sent live product record",
//             "IssueNumber": 26
//         }
//     ]
// }
