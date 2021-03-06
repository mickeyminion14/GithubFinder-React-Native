export interface IConfirmDialog {
  negativeButtonText?: string;
  positiveButtonText?: string;
  message?: string;
  title: string;
  positiveAction: Function;
  negativeAction?: Function;
}
