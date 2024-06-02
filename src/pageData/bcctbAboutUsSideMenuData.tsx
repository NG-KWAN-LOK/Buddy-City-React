interface IbcctbAboutUsSideMenuData {
  title: string;
  buttonData: {
    icon: string;
    title: string;
    to: string;
    type: string;
  }[];
}

const bcctbAboutUsSideMenuData = {
  title: "main__content__sideMenu__content__title",
  buttonData: [
    {
      type: "internal",
      title: "main__content__sideMenu__content__btn__title__backhome",
      icon: "ion-android-home",
      to: "/",
    },
    {
      type: "internal",
      title: "main__content__sideMenu__content__btn__title__aboutus",
      icon: "ion-ios-people",
      to: "/bcctb-about-us",
    },
    {
      type: "internal",
      title: "main__content__sideMenu__content__btn__title__tnc",
      icon: "ion-android-document",
      to: "/tnc",
    },
    ,
    {
      type: "internal",
      title: "main__content__sideMenu__content__btn__title__admin",
      icon: "ion-android-person",
      to: "/admin",
    },
  ],
};

export default bcctbAboutUsSideMenuData;
