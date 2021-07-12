'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "ca34d75eb3e8382f1c08f01a8f394c15",
"/": "ca34d75eb3e8382f1c08f01a8f394c15",
"test/widget_test.dart": "050bf15268c8044be4f0ba0f15bddb8d",
"main.dart.js": "0c09963d29392c888958057f24323f97",
"config.js": "657ddfb2ec19d513419b0bf3a7ca70d6",
"README.md": "819ac07eefd10498065880dd0d4e318e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pubspec.yaml": "762a45c1fc5e41e563615abedfc5e7a9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bfa5821c607e6b00f6074d883b1908ac",
"lib/main.dart": "fd7cc9c62ac0ed61b813f607d2368e49",
"assets/AssetManifest.json": "006d9c53fb73361665e16214cbd29451",
"assets/NOTICES": "99d111723f4c8c5b964e0c18c5f26662",
"assets/FontManifest.json": "1f6bbb2a1aa3ab65aaa9bad57e4a2745",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/lib/languages/ah.json": "a22098f9c2839c958a280bded8191170",
"assets/lib/languages/ru.json": "45ddc89079f1ae778e06a8f8b4384ad2",
"assets/lib/languages/en.json": "7b789429ecce6f09fb4d0edd4cbe05ba",
"assets/lib/languages/fr.json": "140aa9d19a48d32506fd170bdde24649",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/svg/appbar/ic_individual.svg": "a5dc233e096a28131b2a1680443e42bb",
"assets/assets/svg/appbar/ic_merchant.svg": "0c9d5e178b80c3e1b24a2421ef8a7f8e",
"assets/assets/svg/appbar/ic_agent.svg": "05a565b1c2f90f5808513dfe9e074f89",
"assets/assets/svg/registration/cam.svg": "2c3893a33f0ed273ab88753a28ddf318",
"assets/assets/svg/registration/add_camera.svg": "d5a315fc5550cefba4cde320c8d8c705",
"assets/assets/svg/registration/with_docs.svg": "5496a5e6a36d010fddf80608c1dd07bd",
"assets/assets/svg/registration/without_docs.svg": "68e1dd4c74b69546d48df94a9795251c",
"assets/assets/svg/wildberries/home/home.svg": "d4543548dad76a6fadafc4946b792924",
"assets/assets/svg/wildberries/home/down.svg": "f8a417603749d7d23c99aa3244936842",
"assets/assets/svg/wildberries/home/service.svg": "7d88323b9e1436123c9aef6d8a25cf57",
"assets/assets/svg/wildberries/home/up.svg": "065fe539cd8357bc4ce9722d0cfda227",
"assets/assets/svg/wildberries/home/offers.svg": "07e946c2229509bb8e73caf26c5425a3",
"assets/assets/svg/wildberries/home/avatar.png": "e6ddadc615621247af13d789af2facdd",
"assets/assets/svg/wildberries/home/message.svg": "67b82a1bccbf6e6aae37be2068b4da56",
"assets/assets/svg/wildberries/home/more.svg": "a9ec05eb9356fc11bee7a1d819513617",
"assets/assets/svg/wildberries/home/payments.svg": "d6772d10338fcd421427fc6e11cd37a4",
"assets/assets/svg/wildberries/home/mk.jpg": "67568d8b5f9e46110c5585bb3397aab0",
"assets/assets/svg/wildberries/home/notifi.svg": "c087daf30a6fe8dfe91d23d5d722246f",
"assets/assets/svg/wildberries/offers/ill-cards.png": "1739dca9c0b2f98544b05914b534a438",
"assets/assets/svg/wildberries/offers/ill_card.png": "c42ccffc099f3fe72f03e72574ad5a33",
"assets/assets/svg/wildberries/offers/ill_card.svg": "7991c6cb7fc856489ba6885f3d93608d",
"assets/assets/svg/wildberries/offers/ill_deposit.png": "2975ece1cd347b9695af8af00881804e",
"assets/assets/svg/wildberries/offers/ill_investment.png": "c7f8cc0fc482c64773d8ffa8613002e0",
"assets/assets/svg/wildberries/offers/ill_umbrella.png": "892d2ff2f61aa17c7ec47a9aee639ffb",
"assets/assets/svg/wildberries/payments/ic_qr.svg": "58a46109f729f5f7fa9578f9b1ae6adb",
"assets/assets/svg/wildberries/vector.svg": "d22ab1e4a805074087b915afb6ef1f60",
"assets/assets/svg/wildberries/transaction%2520history%2520item%2520in.svg": "8d773f8ad48484a1ae2b90d57715bf9f",
"assets/assets/svg/wildberries/transfers/ic_from_account.svg": "1060dfbd781cf644239712e66937b005",
"assets/assets/svg/wildberries/transfers/ic_to_card.svg": "9dc5550992c2f5993a6be8fc92ab4259",
"assets/assets/svg/wildberries/transfers/ic_government.svg": "d1ac9a88e3df38ee03d69d6acd5877ff",
"assets/assets/svg/wildberries/transfers/ic_transfers.svg": "38731d6ceab2b7d0a5fed73b6549c2bc",
"assets/assets/svg/wildberries/transfers/ic_sbp.svg": "edf5ade8ec52777ff6b427e1c1ef38a2",
"assets/assets/svg/wildberries/transfers/ic_to%2520wallet.svg": "65cd0ba8377552bc7d765e69d6ebf485",
"assets/assets/svg/wildberries/transfers/ic_from_wallet.svg": "5b526d1e2bc79001928fa01021f9a7dc",
"assets/assets/svg/wildberries/more/trading.svg": "0ea6f356afb9102867a5858cad301bfe",
"assets/assets/svg/wildberries/more/ic_favorite.svg": "0827ae4c25e563930326991cca32ed2b",
"assets/assets/svg/wildberries/more/ic_news.svg": "2c5340146d72e242677b4d3399dc1666",
"assets/assets/svg/wildberries/more/logout.svg": "a90fb0554005b5f2da86f987c5fa0a91",
"assets/assets/svg/wildberries/more/ic_contacts.svg": "8c25a03f9712825de15fe4f8f10df42d",
"assets/assets/svg/wildberries/more/ic_goal.svg": "a70992fb5fb948fa7efaf9821b8a9a8d",
"assets/assets/svg/wildberries/more/ic_language.svg": "13d2ab14ffb67321e6f6fa48d32fe55c",
"assets/assets/svg/wildberries/more/ic_payments.svg": "5a32f36ae473741db326fcb4269a4fc8",
"assets/assets/svg/wildberries/more/ic_map.svg": "e977c8d2e6bcab619bc846afc2e7715d",
"assets/assets/svg/wildberries/more/ic_settings.svg": "5dc643dd79ed6749a00a5ddca1e89f64",
"assets/assets/svg/wildberries/ic_send.svg": "6d095a065ac4468a8e49dd1eb8609c82",
"assets/assets/svg/wildberries/mobile.svg": "493c4127d2c979b97bacccbad8170b41",
"assets/assets/svg/wildberries/icon_home.svg": "572eb4750db33b37fe45903318055fd4",
"assets/assets/svg/wildberries/services/ic_education.svg": "71fb432093bdeb9b5a97fe51fbe86286",
"assets/assets/svg/wildberries/services/store.svg": "edd26ee620f767fbc8c536c951740b4b",
"assets/assets/svg/wildberries/services/title.svg": "45d7473bce21ea84256a28b979ae66e9",
"assets/assets/svg/wildberries/services/ic_media.svg": "134a65c5f45ee3c276726894c121a0bc",
"assets/assets/svg/wildberries/services/ic_flights.svg": "5da4014609eda26ee4ac8b8230dd3f29",
"assets/assets/svg/wildberries/services/ic_food.svg": "5e04c5be9f4133cbd9eac968b664687f",
"assets/assets/svg/wildberries/fromcard.svg": "e10ec2b9fda96719d59f09c0151332bc",
"assets/assets/svg/wildberries/sbp-payments.svg": "f3380fa9b87d74f1e6a58b96ad1ee194",
"assets/assets/svg/pfm/ill-success.svg": "c364750fe21de7277161a5ced38f9e3c",
"assets/assets/svg/dynamic/ic_favorite.svg": "46e2700d4bfec953a5a89f88c3fb7e44",
"assets/assets/svg/dynamic/ic_check_on.svg": "9110c6f5bebfe5f823e0a7632afdde39",
"assets/assets/svg/dynamic/ic_checkbox_on.svg": "972358287f0dd7d2605e2693df5c3abe",
"assets/assets/svg/dynamic/ic_payments.svg": "70514e20564cb4126cf0721ec7186f14",
"assets/assets/svg/dynamic/ic_checkbox_off.svg": "94263100c022db2e6c2963b462b45820",
"assets/assets/svg/customer_registration/calendar.svg": "efbb667ebd5709deddb0f9ef30038c17",
"assets/assets/svg/noti/icon_noty.svg": "8f739fd68d47accea4255198d0765209",
"assets/assets/svg/noti/ic_notification.svg": "8aab67ec60d6cf2e056553f975181163",
"assets/assets/svg/wallet/cardless_withdrawal.svg": "0c3828761c692ce92e0a3ca8e10674c4",
"assets/assets/svg/wallet/ic_lock.svg": "f192ff5677ca301b7a53ecc04506d870",
"assets/assets/svg/wallet/visa.svg": "6ba45054fce418c2d2102415c313162d",
"assets/assets/svg/wallet/ic_card.svg": "c4bfc1af280d1b9c4b5a3479fe4f2084",
"assets/assets/svg/wallet/more_details.svg": "0433fae7c2ea37f161b67fb4569625a2",
"assets/assets/svg/wallet/add_card.svg": "620ea82710a1029ad9f74ff14adec678",
"assets/assets/svg/wallet/ic_limits.svg": "eb7e68a687f107f0924b9e2e60db33de",
"assets/assets/svg/wallet/ic_camera.svg": "3e52adf9df3ef460c6707c1548e973dc",
"assets/assets/svg/wallet/Rename.svg": "c871df49cc5b663ce1b0264d627c5f15",
"assets/assets/svg/wallet/ic_unlock.svg": "14a65598383806e7d22a5c21525627d4",
"assets/assets/svg/wallet/wallet.svg": "0ac7afc4c66d437e0d28298e58cbb9c7",
"assets/assets/svg/wallet/ill-wallet1.svg": "0ac7afc4c66d437e0d28298e58cbb9c7",
"assets/assets/svg/wallet/ill-wallet_pink.svg": "270aefb750ae5451a04ed0dcc629200a",
"assets/assets/svg/wallet/Top_up.svg": "59b9c0c5d5ed74bad3c95479e040c81f",
"assets/assets/svg/wallet/Asset2.svg": "c64e67f33ec8aff86bf9a224c4df53e6",
"assets/assets/svg/wallet/mini_wallet.svg": "2c1825794ce19d57db30a54d7d94825e",
"assets/assets/svg/wallet/ic_transfer.svg": "cad1bac22bbdf392c0694198522f10a7",
"assets/assets/svg/wallet/mastercard.svg": "b042fa802cc4017d32e95a008493cfa3",
"assets/assets/svg/wallet/ic_deposit.svg": "4924642b2a14e3ef580240d1ebaa8c1b",
"assets/assets/svg/wallet/star.svg": "888b3ae1d4ea1cfc6bdfb8ca9886b966",
"assets/assets/svg/wallet/ic_check.svg": "da9a96de0ef245a573dfc93bea5e733a",
"assets/assets/svg/wallet/ill-wallet.svg": "f325726c9f2a9ebf675d2577f082d06c",
"assets/assets/svg/account/transfer.svg": "5a263cfd3faed3c07a7978be6c2fe048",
"assets/assets/svg/account/Requisites.svg": "3c88e0229760188cee92e0387209eabd",
"assets/assets/svg/account/ic_card.svg": "c4bfc1af280d1b9c4b5a3479fe4f2084",
"assets/assets/svg/account/more_details.svg": "0433fae7c2ea37f161b67fb4569625a2",
"assets/assets/svg/account/lock.svg": "f192ff5677ca301b7a53ecc04506d870",
"assets/assets/svg/account/Rename.svg": "c871df49cc5b663ce1b0264d627c5f15",
"assets/assets/svg/account/Top_up.svg": "59b9c0c5d5ed74bad3c95479e040c81f",
"assets/assets/svg/account/ic_deposit.svg": "4924642b2a14e3ef580240d1ebaa8c1b",
"assets/assets/svg/account/limits.svg": "df42f4f909dbb3d58858cf1af6a86c4c",
"assets/assets/svg/total_sales/in.svg": "cf913d9010d1034a226e39771ebe9d32",
"assets/assets/svg/total_sales/settings.svg": "7350c5add0166c316f1c94a94e3759d1",
"assets/assets/svg/total_sales/bill_payment.svg": "ee3b2203fd7e1d4c8d95b0a820f15c79",
"assets/assets/svg/total_sales/item.svg": "e7e519788d43768065fb9c37bcd8328d",
"assets/assets/svg/login/logo.png": "782f0fa8823f254b6b7f34943892b943",
"assets/assets/svg/login/logo.svg": "07653d692dd4b0fc486050fbf56e8c2c",
"assets/assets/Inter-Bold.otf": "471bf144995e5023c5932844d9f1af88",
"assets/assets/Inter-SemiBoldItalic.otf": "a27613e53d3839bfe5af81462a6601c9",
"assets/assets/Inter-Thin.otf": "b769672dff528db6cd1d3abb6635b14a",
"assets/assets/images/banner-chat.png": "24d70479a8a499101014df195a7fee8c",
"assets/assets/images/icCardVisaColor.png": "12c92cd79d67d7bd09dc4e5775d8cd39",
"assets/assets/images/icn-transaction_history-removebg-preview.png": "918ac49b24b4c9eb594b94ae06332b6a",
"assets/assets/images/Story_4.png": "b2776d903fcffdb83eb58062377be499",
"assets/assets/images/ic_applications.png": "75495381ec849ffe5a59a6f29dd83831",
"assets/assets/images/banner-trading.png": "321faa8780e9d2c9a336f0390dc923e1",
"assets/assets/images/ic_groceries.png": "cc1e14524d96e0330fb72fe78d0823e6",
"assets/assets/images/ic_done_big.png": "b2cb0ff5ab9737ec34f63186cb8597e5",
"assets/assets/images/ill_accounts.png": "c79585be4fab004591cc99b358adb8c7",
"assets/assets/images/home_payments.png": "639bde577228de2a0188cc5cbf46d3fd",
"assets/assets/images/ill_cards.png": "b1c1999149b55215e55dd05f8a0a305b",
"assets/assets/images/my%2520position%2520drawable-hdpi.png": "e2a8fb9705279dd96b9bf17873db0138",
"assets/assets/images/icPaymentGray.png": "7778cfacf9ed926a2dc5c7ff9c1e4c27",
"assets/assets/images/Story_5.png": "72b1127fc2e839286d91018a8fd6ed64",
"assets/assets/images/transfer_out.png": "e1fac7ccd5c22ddaef6bebb5f46118d1",
"assets/assets/images/ic_arrow_right.png": "415fd9de8a30206539e72bb17aa4ad82",
"assets/assets/images/ic_account_copy_2_4.png": "b98ecc8a85ab365dd642ff81d8438406",
"assets/assets/images/ic_wallet%2520drawable-xhdpi.png": "48727ce5fa6c6eb4bd82f766c3a0bf29",
"assets/assets/images/icDetailsBlue.png": "090a014e78f078f3f46f5c6bd5c9e337",
"assets/assets/images/Polygon.svg": "3683244cad5a5234959eafc9c3d17055",
"assets/assets/images/icn-registration_home.png": "bc84daf0306ba04574d23ab97867f446",
"assets/assets/images/ic%25D1%2581_mic.png": "8d1fd6fb05a422cdba6eec63c9d7a6a7",
"assets/assets/images/ic_merchant.png": "96e6c2647e2fa0b116d84cc1fc65692c",
"assets/assets/images/igmnew.png": "7eef56ea31ecf8e3ae3fbcf9ccdb5e7c",
"assets/assets/images/ic_transaction_copy.png": "9160b009d0c51225739276a37d4f98d6",
"assets/assets/images/wallet.png": "b6d913641812bb57f685a684196d59b4",
"assets/assets/images/banner%25203%2520copy%25202.png": "bcb7fcb497a8de9caaae135c30055b73",
"assets/assets/images/sale.png": "844f09cc763174599edaf98ed07283bb",
"assets/assets/images/sidebar_icon_qr.png": "04cd1e3e2f25f3f3a64aec5084a251b3",
"assets/assets/images/american.png": "fb939b6681f5463a9727b27f6a192289",
"assets/assets/images/bpc_logo.png": "00941471cccabeb39ff47e0b9857711c",
"assets/assets/images/home_cards.png": "e954e34eaaad3413fa4e91986b9b0872",
"assets/assets/images/ic_account2.png": "5241786f0ca43772b87581195a9f9182",
"assets/assets/images/ic_calendar.png": "c082245314a2d44e18f0c8f64f45fd44",
"assets/assets/images/ic_account_copy_2_3.png": "b98ecc8a85ab365dd642ff81d8438406",
"assets/assets/images/icPhotoBlue.png": "14f97a9c9489d11e2cdc07305d69c5b9",
"assets/assets/images/icon-12.png": "d830e6d78ab4d26c7555daaa4dd1b002",
"assets/assets/images/ic_offers.png": "bc0a13ea77da24dd0d317cdeb723f112",
"assets/assets/images/ant_design_question_circle_filled_red.png": "456ef256679cb6f8f33a8786a0e10763",
"assets/assets/images/ok.png": "d74d1b410e1d533e130d75cfa1b51c3f",
"assets/assets/images/Story_2.png": "11535db0eb6465f835aa5dda2065d100",
"assets/assets/images/ic_cash_out_copy_2.png": "5a6d2a619e6a672ded9038892ca2dc01",
"assets/assets/images/ic_notification.png": "897189ed3516899a39734e338308a82a",
"assets/assets/images/wallet%2520drawable-mdpi.png": "ae3376c5c55ae763bf97fe45829dd923",
"assets/assets/images/bounds.png": "131eefa1ada7449c0f7e0bc8fd218619",
"assets/assets/images/restaurants.png": "5aad508f152fe39daf8d6e6329758acf",
"assets/assets/images/il_pfm.png": "2cc358a9bcb0b7c0894d22d8e8801210",
"assets/assets/images/sidebar_icon_logout.png": "fcc6b45b62157257619abd38c037721e",
"assets/assets/images/banner%25202%2520copy%25202.png": "5a63992c64fb216e7402321e4ab89d0d",
"assets/assets/images/cash_in_out_result.png": "f72689d6389f1f241797c5064709567b",
"assets/assets/images/Appendix%2520A.%2520'Result'%2520Codes%2520-%2520Channels%2520team%2520-%2520BPC%2520Confluence.pdf": "983b5deb0df47b12269b19743486d0be",
"assets/assets/images/icBlockRed.png": "0924cbc8d657422cd6e07f51614d2ea9",
"assets/assets/images/image_2020_09_07T08_41_30_889Z.png": "8425b68afc7b657a29b998d28f78ba08",
"assets/assets/images/icon_chat.png": "64015461ce1e599b2dad8b05273a1ffd",
"assets/assets/images/ic_manage_cards.png": "2dfc9e81e8358fbd3f61b0a217ec2796",
"assets/assets/images/Story_3.png": "5c9aebf1d7446de017f253f11d3c0f32",
"assets/assets/images/home_pfm.png": "27d40e99627551457e614f2f5a0fb505",
"assets/assets/images/ic_payments.png": "343f4245bffef2a2f26b30f5d594f845",
"assets/assets/images/settings.png": "78a3bda58010d1cf1f601ce18a912bf0",
"assets/assets/images/group.png": "beec483cc16b49fcc32d190a6ac04fb4",
"assets/assets/images/ic_account_copy_2_2.png": "b98ecc8a85ab365dd642ff81d8438406",
"assets/assets/images/rounded_euro.png": "eddebb22ecd97883b6b69613494a93b1",
"assets/assets/images/pfm_8.png": "65fb6fb79ec75286d63a4f2362f65e0b",
"assets/assets/images/icon_pie.png": "594f260cd9e8b87ae3950445fae68d36",
"assets/assets/images/ic_notCheck.png": "8c9ee7e1e7bf8c23b1002c285f798d0e",
"assets/assets/images/Story_1.png": "c829bec88816cfeac37e57fbdf8540dc",
"assets/assets/images/generateqr.png": "d58d8a97f029e7674db88aca7971eda9",
"assets/assets/images/ill_qr.png": "48bebcb55a2a8828fe2b8eeb2adf9672",
"assets/assets/images/ill_qr.jpg": "c84488200c8786b4acb356dc0676159f",
"assets/assets/images/ic_fingerprint_android.png": "290a41ba180ccf07ab35f2d785922ac9",
"assets/assets/images/ic_language.png": "2fc9681c6b1d1019f75da8cc3146e3c0",
"assets/assets/images/ic_falling.png": "adf60b6fc57a854dd07cb728ac8fc738",
"assets/assets/images/icLoanBlue.png": "d68759ae54ae6f0153f614f56d5ac267",
"assets/assets/images/home_accounts.png": "6a105ae1332cfceeb7579fd42631a624",
"assets/assets/images/ill_payments.png": "48889125c83af1232de0f52e2531d307",
"assets/assets/images/ic_restaurants.png": "1404310b3fabcab26cc1733f3d9d176e",
"assets/assets/images/logo_mastercard.png": "e0913e2dde7bef947d1852dbd2259686",
"assets/assets/images/ill_transfers.png": "0edeb09967135892901c10289f83569a",
"assets/assets/images/home_transfers.png": "da83df1337f0db8ed1a49006096846a4",
"assets/assets/images/ic_utility_payment.png": "72f3b0a3f33f8a288ba6524f0a32c36d",
"assets/assets/images/ant_design_question_circle_filled.png": "72513948d96495e8c646736cc5a6e180",
"assets/assets/images/home-cards.png": "fb89bd304735f4c2bda475650c53f4ce",
"assets/assets/images/pfm_9.png": "e4d3212dbc3d0a6446a0f02c8da779d1",
"assets/assets/images/ic_camera.png": "97c107547ec47ff86c43a091dd64744f",
"assets/assets/images/ill_locations.png": "7566c25a17a1be185d2f63ba3d43e23c",
"assets/assets/images/Combined_Shape.png": "ba91680d48d3af06201957d7414e0366",
"assets/assets/images/ic_telephone_copy.png": "4c4c64899a642d369602133477b96b78",
"assets/assets/images/myPosition.png": "55869161fff303df61f4901c7eac2b28",
"assets/assets/images/ic_limits.png": "ae49da49a588ee027b1dbe31c37d8118",
"assets/assets/images/branch6.png": "97d11c5b5a02236b93fa7de5072dce7b",
"assets/assets/images/merchant_drawable_xhdpi.png": "80e12d8bf2b297acea7ff8284866e34f",
"assets/assets/images/ic_story2.png": "53f34d5339fc461715b7ec60a54032fe",
"assets/assets/images/banner2.png": "5a63992c64fb216e7402321e4ab89d0d",
"assets/assets/images/ic_loans.png": "11643f2e142e719f431648c34ff04d83",
"assets/assets/images/icn-cash%2520in.png": "4b58313a5a5bd370eb323387458a9582",
"assets/assets/images/ic_touch_id.png": "2e50931c3950cdf3c5e4b249059e76b5",
"assets/assets/images/2.0x/ic_done_big.png": "be88d8f3b7e7b0d3e06cc9709c741f5f",
"assets/assets/images/2.0x/ill_cards.png": "d8d420cc769998e3acea75a92b449e6d",
"assets/assets/images/2.0x/transfer_out.png": "b4e8989d6276d086d281b7ca6600ddf8",
"assets/assets/images/2.0x/ic_arrow_right.png": "8922ec5703a2cb06fc2bb3ae916f4072",
"assets/assets/images/2.0x/ic_transaction_copy.png": "72091bede7d6b47b22e08dfaf608224b",
"assets/assets/images/2.0x/ic_calendar.png": "63d8afee9075d0e247461db726a0bd86",
"assets/assets/images/2.0x/ic_offers.png": "f312166a7ac0fb03af2217e7135be59c",
"assets/assets/images/2.0x/ic_cash_out_copy_2.png": "e24bbb982505b59dabac64e906f752f6",
"assets/assets/images/2.0x/ic_notification.png": "d12add03c6a374f402f566a786e4082b",
"assets/assets/images/2.0x/bounds.png": "03f4e42f0f96a7456465aa3fb4b92b04",
"assets/assets/images/2.0x/ic_payments.png": "97b91429cbbc2736a3d3050988ce9c4e",
"assets/assets/images/2.0x/settings.png": "48164b46d28fd3af5950b0ec4ebcbd9b",
"assets/assets/images/2.0x/ic_fingerprint_android.png": "9bf13ddf4ac3c618be14311887f68221",
"assets/assets/images/2.0x/ic_language.png": "84295ce2fef34daf90281690ea575cab",
"assets/assets/images/2.0x/ic_falling.png": "3dd29b4e82deb6e02cc1b397f68210ef",
"assets/assets/images/2.0x/ill_payments.png": "782e1816cd0d28bb116dc113610c04e8",
"assets/assets/images/2.0x/ill_transfers.png": "662be80a6272ca7270c81a1f8d93d9de",
"assets/assets/images/2.0x/ic_utility_payment.png": "e6e0dd8b793644a6bdddd1a6c695b7e7",
"assets/assets/images/2.0x/ic_camera.png": "1aaf73dfc4d98aa7dec4c1b074c3bc41",
"assets/assets/images/2.0x/ill_locations.png": "7566c25a17a1be185d2f63ba3d43e23c",
"assets/assets/images/2.0x/ic_telephone_copy.png": "5a631ce9d3aed3648caaa7a4de4fc589",
"assets/assets/images/2.0x/ic_touch_id.png": "6ff0eb164471b0daf3d6f0d94a211194",
"assets/assets/images/2.0x/ic_goal.png": "972756da6a1e191a6c8585fed4b0ace3",
"assets/assets/images/2.0x/logo_text.png": "25428b04920acb1a4b1ebb769563bff4",
"assets/assets/images/2.0x/group_3.png": "cc5af457a7db124b1e3071209ec30056",
"assets/assets/images/2.0x/star_outline_filled.png": "7a36cd3b326ddb3a983014deceee6fdf",
"assets/assets/images/2.0x/ic_info.png": "30c9f0ede3ade9382f7f4f2e210ef0b3",
"assets/assets/images/2.0x/ic_lock.png": "05891bf7f2753ed096ee6059dd22b4aa",
"assets/assets/images/2.0x/ic_messages.png": "25bc5fe2105d2d8e7ac314bea3c5fdae",
"assets/assets/images/2.0x/transfer_in.png": "a2bc84c1aed93655a8dc1be94f9303b0",
"assets/assets/images/2.0x/ic_mobile.png": "0b899b2c465791b6dc6ce21803077748",
"assets/assets/images/2.0x/ic_client_add_new.png": "066a4ae828e3c32a69896ed9ee50926a",
"assets/assets/images/2.0x/ic_withdrawal.png": "89e8b40e73bb77ff92261d605a62cfd4",
"assets/assets/images/2.0x/ic_account_copy_2.png": "96b02b0c8e1c29ed5de246417fbb7da8",
"assets/assets/images/2.0x/ic_expand_down.png": "b77e41ebbd09833463cee8255a8b3a46",
"assets/assets/images/2.0x/ic_transfer_in.png": "a0edf3f72e27dfdfc85d63ff6c86020d",
"assets/assets/images/2.0x/ic_favorite.png": "d4c9f0d7732a8451ec7dc7e6a07c87a6",
"assets/assets/images/2.0x/search.png": "d44d26da8ac5aaa34ac673bd1f447d99",
"assets/assets/images/2.0x/ic_electricity_copy_2.png": "64d0da20af40be9c95786e8927dc30f3",
"assets/assets/images/2.0x/ic_logout.png": "cb11f07760b2fad97fd8bdeab8b32e58",
"assets/assets/images/2.0x/ic_cancel.png": "dd5f2b798f71e446062c1226025bd4f9",
"assets/assets/images/2.0x/ic_export.png": "efc20adba7008ff8ee9e73490ecf3b08",
"assets/assets/images/2.0x/ill_exchange.png": "08d4424c605eb2f6f4fb9c843b5d7036",
"assets/assets/images/2.0x/ic_edit.png": "46969f3907b0b7efbfb6589e70ed0c2c",
"assets/assets/images/2.0x/ic_cash.png": "81822e30f1ef787b38987b67c470461f",
"assets/assets/images/2.0x/ic_register_new_customer.png": "fe7b5e9ffdba2fb4a32e4ffb633ff26e",
"assets/assets/images/2.0x/ic_internet_copy.png": "f8732d045f2e5c229151be0e9f46e4a2",
"assets/assets/images/2.0x/ic_baseline_play_circle_filled.png": "d7e2740982547c0f8fd58c94a3706d53",
"assets/assets/images/2.0x/logo.png": "338874f7df67d9aec94938e07ab0ae0e",
"assets/assets/images/2.0x/ic_settings.png": "a39e74ac05697e1f30198275d7637bf7",
"assets/assets/images/2.0x/ic_agent_to_pup_copy.png": "d48caf801d83d03ba07c4a0c6ebbc1f8",
"assets/assets/images/2.0x/ic_transaction_copy_2.png": "d0925a4f2a19eb21e5016f937b17ccb7",
"assets/assets/images/2.0x/ic_tv_copy.png": "520fb986b10d94096e2f5e55d7f63ca6",
"assets/assets/images/2.0x/ic_mic.png": "6ece6c6e8906f4a21e1794b965c5490e",
"assets/assets/images/2.0x/ic_send.png": "a199842b3738a1a95ae5c2a3aa418721",
"assets/assets/images/2.0x/ill_goals.png": "7a9563951a0be501fc479400428ba7f7",
"assets/assets/images/2.0x/ic_account.png": "c0af8524dd0752771e5c5667f98535bc",
"assets/assets/images/2.0x/ic_filters.png": "0414b1a2d5b1185903fd350d488f4a70",
"assets/assets/images/2.0x/ic_wallet.png": "fcf3b30936f3883082f7b5ddc61c3591",
"assets/assets/images/2.0x/ic_growing.png": "2e55bcebd564d083a2a6c4d84c869c2e",
"assets/assets/images/2.0x/cash.png": "0510a863e1e6ecbec0377fbe34317d6e",
"assets/assets/images/2.0x/ic_transaction_history.png": "6900e531a54687f905572cdeefd5caf0",
"assets/assets/images/2.0x/ic_postpaid_payment_copy.png": "4682255edea06561fd42b974f71a1b4e",
"assets/assets/images/2.0x/ic_menu.png": "92802c5004d59c058e09d8ffdae931bb",
"assets/assets/images/2.0x/star.png": "e21a7efc3b254ff724f21308384fbfa6",
"assets/assets/images/2.0x/ic_arrow_drop_down.png": "e73a40c3365b7f7729be61e249381714",
"assets/assets/images/2.0x/star_outline.png": "a59af434de33871143d63fa9a2bdd915",
"assets/assets/images/2.0x/ic_top_up.png": "b9571650e64737ef7ca4e722c5916f68",
"assets/assets/images/2.0x/ill_chat.png": "ae910837727e9444e1d751de07e782b2",
"assets/assets/images/2.0x/more.png": "cc2b6f94f34399dc0d6bae0ddfadf820",
"assets/assets/images/2.0x/ic_cash_out.png": "b05a121fdb43508cb720c1255e1b234b",
"assets/assets/images/2.0x/ill_trading.png": "566bde57151d81cbce8f95668652903f",
"assets/assets/images/2.0x/ill_receipt.png": "d954e82a76c9ad7ce67e3cd3f7e3f2a1",
"assets/assets/images/2.0x/notification.png": "4959fbfb1c010ea2b35675b243a44838",
"assets/assets/images/2.0x/zb_secondary.png": "0f71e43e5d25a188687f80d482cea993",
"assets/assets/images/2.0x/ic_contact_us.png": "1bf4039d521f6ce73b5165e94c5cd060",
"assets/assets/images/2.0x/ic_cash_in.png": "da8859774fd583a26df868456bccdd66",
"assets/assets/images/2.0x/back.png": "aae296baa12cb0f504c2390a4519b7c8",
"assets/assets/images/2.0x/ill_pfm.png": "4f99bbdcce11cee82963069e30a0cea0",
"assets/assets/images/arrow-2.png": "1d5bd8a3c1dad5d8d59642d5ef26670e",
"assets/assets/images/checkbox_checkbox.png": "7c302d30fbafe22fae020bbe74a1da8f",
"assets/assets/images/ic_goal.png": "c3cac9fbe4c61e19a62dc86a10fc6ae2",
"assets/assets/images/unified_error.png": "b19d69df88563d7cb8b358c96d2cd3dc",
"assets/assets/images/ic_total%2520sales.png": "7a371772ba668dfd07c2b7bb302680ac",
"assets/assets/images/total_sales.png": "fe8f9261bb7f308e137201d5990863db",
"assets/assets/images/ic_qr%2520phone.png": "530e028defbeb7c80d6bf994f236ab47",
"assets/assets/images/arrow-3.png": "b073e1510344d8e4c2335ab6cbaaa460",
"assets/assets/images/registration_person.png": "801c039bc71c6553840e93dd47f6e1e2",
"assets/assets/images/icTvBlue.png": "50de91892a3913ff8df36d525950be11",
"assets/assets/images/pfm_14.png": "53bd2694584a6787e0adb80ec56056c1",
"assets/assets/images/logo_text.png": "d2d5c6c106607a164dd8ed60e8d3b5f9",
"assets/assets/images/banner3.png": "bcb7fcb497a8de9caaae135c30055b73",
"assets/assets/images/ic_story3.png": "bb090a6e27f78b3b5eb59657192dff86",
"assets/assets/images/branch7.png": "4057de9b637e5a9f2d291cb3d490f879",
"assets/assets/images/ic_checkbox_on.png": "d4d347d0bc4deba0cdb66aed3aff6d15",
"assets/assets/images/group_3.png": "7c8d0c40dc8ecb29f71bec5bfea49cef",
"assets/assets/images/star_outline_filled.png": "f71e10ae2bd19d12ee4f7f9d4e9240a0",
"assets/assets/images/ic_story1.png": "0fcb8e9d474a1449b2d6ff6f14e6052e",
"assets/assets/images/banner1.png": "98bdba823526e34be29bd1eb7224b2e5",
"assets/assets/images/master.png": "dc1e1a216976f7d555d4b55b4932127d",
"assets/assets/images/ic_shops.png": "836cbf3d0a793bb74578c9b93a73b8e6",
"assets/assets/images/home_wallets.png": "c4217506f9155fb079ea9c92fef3a705",
"assets/assets/images/icBackBlue.png": "f0ffcbac6bb9501b097b952988f4fc77",
"assets/assets/images/ic_sms_service.png": "5850ef21a93f2de5669e8967e3c87cd5",
"assets/assets/images/ic_card.png": "9fc9b3c20fcee0d9fb4215b2ca5857b1",
"assets/assets/images/locations_home.png": "5f9391b760d682e0fd42ddfb7463dce6",
"assets/assets/images/my_position.png": "edd7b47822da44b93c7f83471b574abe",
"assets/assets/images/qr_generate.png": "ab593980e66b65147610b65367fef204",
"assets/assets/images/icn-wallets.png": "fbc8470f99e766888020eb9d9e3216b0",
"assets/assets/images/group_2.png": "e5610d9257ca9af8ba2a51427380d229",
"assets/assets/images/visa.png": "cf714efd2dbfdd3015ec296c2dcba4f2",
"assets/assets/images/ic_info.png": "b59214381a64da1f6482bfef31134c32",
"assets/assets/images/ic_lock.png": "53a7c54569da664d512b80ef75d02010",
"assets/assets/images/banner-pfm.png": "45f1ea7e84346cbd68a3667b78766d46",
"assets/assets/images/icCategoryTransfer.png": "707b5c2c2bdaad50e13708fd83baf0d0",
"assets/assets/images/ic_story4.png": "0d841e3338320484a780eb326d2cec4b",
"assets/assets/images/ic_messages.png": "83db5109b4bee270cc5d86167846576a",
"assets/assets/images/home_trading.png": "4e9bca95ec379f9f41dc53870a21737a",
"assets/assets/images/my%2520position%2520drawable-ldpi.png": "fedbe0751a5a3a6bd3fa55adde7cace3",
"assets/assets/images/icon_graph.png": "d48fcd04b19550e80b312c2b8bf32839",
"assets/assets/images/ic-mc.png": "ed5ee58bfdf78150f0dfdf1ff89aa7ea",
"assets/assets/images/transaction_history_item.png": "1fcdd37c93e8f5ba72ea9405c665d561",
"assets/assets/images/i.webp": "03d9c1fc4e07d89b172d42acb5a87ca4",
"assets/assets/images/il_goals.png": "d4fdc009b218e0f937fd18b166b565fb",
"assets/assets/images/groupYEN.png": "859f744afbbdfe4114569674c9f044a5",
"assets/assets/images/pfm_13.png": "fcf3dec9fe4d3b1b69c815fa17fd0943",
"assets/assets/images/transfer_in.png": "d72afecb8de3142a546a29beea4dbc60",
"assets/assets/images/ic_growing_copy.png": "70f9b62c5af0820bbacc8e99f6d2e32f",
"assets/assets/images/ic_mobile.png": "55fe10606cbe7319dc6fe4a039b772f2",
"assets/assets/images/ic_sms.png": "e5d7b0f340e99eae640eb23055cebc15",
"assets/assets/images/en.json": "944b4d0e9d50d5d4607f840adb768033",
"assets/assets/images/pfm_12.png": "ed5b81748470d84d9cb4c2e01510cbc0",
"assets/assets/images/ic_client_add_new.png": "b80f43f0d268fe8bdc918c3e246d9c95",
"assets/assets/images/transparent_coins.png": "aaeeb187d82f3f0c2d985b8808227caa",
"assets/assets/images/banner%25201%2520copy%25202.png": "4ad8d6671a0cc2e24a71bec56e8918d4",
"assets/assets/images/sidebar_icon_settings.png": "15a86acea3b6496a4d55ac5470a28b61",
"assets/assets/images/ic_withdrawal.png": "e77f437ed77bd3ea3717a19329edec89",
"assets/assets/images/ic_story5.png": "c7f8ec71bc39931973ef4c01b5d3c002",
"assets/assets/images/sidebar_icon_news.png": "d78dc7de4d8679673852b0aa248b16c7",
"assets/assets/images/icc_info.png": "b59214381a64da1f6482bfef31134c32",
"assets/assets/images/merchant7.png": "2274ad48aa2afbc73762cf9d7b61b90e",
"assets/assets/images/icCardMcColor.png": "f9e7505c90c4c56147f5266a46520a74",
"assets/assets/images/ic_account_copy_2.png": "b98ecc8a85ab365dd642ff81d8438406",
"assets/assets/images/ic_check_on.png": "0ad48bfd1d64b17d76a6b772a2684b60",
"assets/assets/images/group_5.png": "0328e494961e11a54f0fb9483cd7c373",
"assets/assets/images/ic_expand_down.png": "650e0227944cdee1fe3aefbe1c02761c",
"assets/assets/images/3.0x/ic_done_big.png": "1a2637bbd6169ee68caa2961818368a2",
"assets/assets/images/3.0x/transfer_out.png": "a7d0045faebeeecfafa56b3182c89314",
"assets/assets/images/3.0x/ic_arrow_right.png": "3e040f6fe6057162f32e4a752c21f43d",
"assets/assets/images/3.0x/ic_transaction_copy.png": "c98dbb7292acd8eea55db4cf70ac5d8f",
"assets/assets/images/3.0x/ic_calendar.png": "1ba0ac9bc59de237c100b389073e9fc1",
"assets/assets/images/3.0x/ic_offers.png": "1653e1e38519bc453233a50ad60edcc6",
"assets/assets/images/3.0x/ic_cash_out_copy_2.png": "50109d47fc2269546b79e0bce7aa3464",
"assets/assets/images/3.0x/ic_notification.png": "752730acf9d0f5dc24a144b89be2df72",
"assets/assets/images/3.0x/bounds.png": "fca11829a1a57ea4d7c5c3345f2c3b16",
"assets/assets/images/3.0x/ic_payments.png": "68cc370b9fe3326c61b970f83013a9b4",
"assets/assets/images/3.0x/ic_fingerprint_android.png": "4d56b6775a2c726c5efe9ffe39c1d4d9",
"assets/assets/images/3.0x/ic_language.png": "3f8a65e3c618eac4c2708469f9284b6e",
"assets/assets/images/3.0x/ic_falling.png": "b2e391589b6e804186679187c9f26e27",
"assets/assets/images/3.0x/ic_utility_payment.png": "e48b63d009d2d36984c1eea5f2afa224",
"assets/assets/images/3.0x/ic_camera.png": "f7e1e7de9b7ddfb022a2c91d9da2df54",
"assets/assets/images/3.0x/ic_telephone_copy.png": "72a10d017e021e895d73447f6a8e98a1",
"assets/assets/images/3.0x/ic_touch_id.png": "0c290cf96f9a4faa1394b7d29f6e145d",
"assets/assets/images/3.0x/ic_goal.png": "8550a64cc4469d4247c121613db0f519",
"assets/assets/images/3.0x/logo_text.png": "74106ca20d05ca67b3cbb80d6c826adc",
"assets/assets/images/3.0x/group_3.png": "28c76023bb251c5db2de5e2840a7b00e",
"assets/assets/images/3.0x/star_outline_filled.png": "bd311cf5daf09a9eeaf8d38e0ff46eb4",
"assets/assets/images/3.0x/ic_info.png": "c224f3ba9cf0df24c81a42fe46be74a0",
"assets/assets/images/3.0x/ic_lock.png": "d3b45dd66aa3a1bd653725a486ecb333",
"assets/assets/images/3.0x/ic_messages.png": "c0eeab45f6d7ef78e10f5508c52b163d",
"assets/assets/images/3.0x/transfer_in.png": "e507f23165a769e0fdf0852ab779dc69",
"assets/assets/images/3.0x/ic_mobile.png": "60855fab6e2382e3e378c0d32dff7ecb",
"assets/assets/images/3.0x/ic_client_add_new.png": "3291dcb2ad58c7e452cde747e4e637bf",
"assets/assets/images/3.0x/ic_withdrawal.png": "4c5e6bffee4d4de2d0ee39949095f585",
"assets/assets/images/3.0x/ic_account_copy_2.png": "e7832b6bd5619e50334ac347e16a3c26",
"assets/assets/images/3.0x/ic_expand_down.png": "2052c8fdf5e70a537350b590a2d3e381",
"assets/assets/images/3.0x/ic_transfer_in.png": "8ee4e3064f06a73562f51120beb7051e",
"assets/assets/images/3.0x/ic_favorite.png": "86ca5adaca676fa684a2c819f533976b",
"assets/assets/images/3.0x/search.png": "b9614537a065f8b999e1034b694d612c",
"assets/assets/images/3.0x/ic_electricity_copy_2.png": "f6dd7adadf52de573fe377d50c86c692",
"assets/assets/images/3.0x/ic_logout.png": "63320863700e7201549cfb50a2ac1b5b",
"assets/assets/images/3.0x/ic_cancel.png": "e0e945eabf232fa0872e98a2e18c60d8",
"assets/assets/images/3.0x/ic_export.png": "8929ac36dcdd420c1e55948f0082cf9c",
"assets/assets/images/3.0x/ic_edit.png": "afe64b794253c5d76aa46c2900aefa48",
"assets/assets/images/3.0x/ic_cash.png": "fff706687b0c6732f8d33cecd54bc867",
"assets/assets/images/3.0x/ic_register_new_customer.png": "693c7fe1d4a6313cfe41823698371984",
"assets/assets/images/3.0x/ic_internet_copy.png": "813ca34800dadc97754c26f1920e4e7c",
"assets/assets/images/3.0x/ic_baseline_play_circle_filled.png": "c23f11f27583e1eade83c451c0e1c922",
"assets/assets/images/3.0x/logo.png": "82635a5ecc40012c5e0a601d1ed607b9",
"assets/assets/images/3.0x/ic_settings.png": "eca74a6852e559afece842becc1ff6aa",
"assets/assets/images/3.0x/ic_agent_to_pup_copy.png": "7d89e60a5726f1e1ce1a78972e599f12",
"assets/assets/images/3.0x/ic_transaction_copy_2.png": "34799df85cb6a160942506b9051650f0",
"assets/assets/images/3.0x/ic_tv_copy.png": "bb1b0954af02df9c910b95d3c29da23e",
"assets/assets/images/3.0x/ic_mic.png": "c8739d911922027a16e53ac9d8a76d69",
"assets/assets/images/3.0x/ic_send.png": "f4e5d671fbb7fe18003f4302c96162b2",
"assets/assets/images/3.0x/ill_goals.png": "a96036704a474eee8e0741ed54f6231c",
"assets/assets/images/3.0x/ic_account.png": "8d88e04cac6cd5765e2492740d472338",
"assets/assets/images/3.0x/ic_filters.png": "05c81dec12b7f482a69f7b16513ae3f2",
"assets/assets/images/3.0x/ic_wallet.png": "e365db3cd5497f68325ab576aa5e3c93",
"assets/assets/images/3.0x/ic_growing.png": "61d37c8a0afab12c8653749b036f8bf3",
"assets/assets/images/3.0x/cash.png": "28bcae1411923b4a9ed38c134b08129c",
"assets/assets/images/3.0x/ic_transaction_history.png": "d4013df7d95b1b75e17a075234f83e49",
"assets/assets/images/3.0x/ic_postpaid_payment_copy.png": "335f7b0cfe4728e93f2a5e3ac17af818",
"assets/assets/images/3.0x/ic_menu.png": "67f971a2f4556542800506913e43d5be",
"assets/assets/images/3.0x/star.png": "0f6428bf74b61595a666c8e76d3e1803",
"assets/assets/images/3.0x/ic_arrow_drop_down.png": "eddca5887ac7db8a16eaf2556724d04d",
"assets/assets/images/3.0x/star_outline.png": "e1974e07b522c39e852ad5908b1f764e",
"assets/assets/images/3.0x/ic_top_up.png": "09b973139c1d79c46f8b08bba341f397",
"assets/assets/images/3.0x/more.png": "d50a6449f09cf70448925700351ebc37",
"assets/assets/images/3.0x/ic_cash_out.png": "81512da50802117f3490209bea470e6f",
"assets/assets/images/3.0x/ill_receipt.png": "23f7b770b12208d7ec915d571d096bfd",
"assets/assets/images/3.0x/notification.png": "19184b54e02c77f94abbcd113a6d14a4",
"assets/assets/images/3.0x/zb_secondary.png": "1a30e5937f4b81cd2895a323b1c65a99",
"assets/assets/images/3.0x/ic_contact_us.png": "fda4fd6edb2396091a7b762221d46b63",
"assets/assets/images/3.0x/ic_cash_in.png": "86cbdfc5ce8b02b0550865fdd33d362e",
"assets/assets/images/3.0x/back.png": "522bbd824d15ecdfe32fd205900acf3c",
"assets/assets/images/sidebar-icon-internet.png": "1273a205691587de1ff54df821ced94b",
"assets/assets/images/pfm_10.png": "d0dae3eda011b784f8c1117d94a55fb4",
"assets/assets/images/ic_cart.png": "7c51e45a6e2a74d573cd3269ab932642",
"assets/assets/images/sidebar_icon_goal.png": "92ada17a9e0b4ed0a8fb8c7b4d55feed",
"assets/assets/images/circle_for_currency.png": "3a60ce1e91c9226dbb07aa29a4839c08",
"assets/assets/images/bg_loginWeb.png": "40d590931d90f8c2c6e0aec07663c49b",
"assets/assets/images/il_transfers.png": "0edeb09967135892901c10289f83569a",
"assets/assets/images/icn-total_sales-removebg-preview.png": "be555ef73c7059170cafc51bf4ef1c74",
"assets/assets/images/icn-cash%2520out.png": "f3fed950c1a6def72a13141a973209f4",
"assets/assets/images/ic_transfer_in.png": "d7ae6203da7606503f08e487f210942b",
"assets/assets/images/pfm_11.png": "52259bcb1b878fb9380284b8c3845341",
"assets/assets/images/ic_favorite.png": "578d7b47b93339d359c9c33460ea31aa",
"assets/assets/images/ill_insightspng.png": "0ec6b7df795fc9b4ca7905b1139cb4c9",
"assets/assets/images/checkmark.png": "d51e71d0e6dda0ce501637369e570948",
"assets/assets/images/circled.png": "c415ffb1585d4055633492a9c9fa5884",
"assets/assets/images/icPaymentBlue.png": "b1c82811cbf3b5c28c9a980389ccd128",
"assets/assets/images/background.png": "2f24cd9444768ee5bfa6580185423382",
"assets/assets/images/search.png": "f0d70c293063122bd16e95209ee52f4c",
"assets/assets/images/il_chat.png": "eab84c02d4cf3928631c9e75296e4394",
"assets/assets/images/ic_electricity_copy_2.png": "9eeb7c6e19b9caa755e2f1f0879c4b21",
"assets/assets/images/il_accounts.png": "c79585be4fab004591cc99b358adb8c7",
"assets/assets/images/icc_export.png": "4ef7ab4df41c0fc3723857200e98c333",
"assets/assets/images/ic_logout.png": "bf6dc900dafd074d2a5e7da6ad7ebe81",
"assets/assets/images/changing_pin_success.png": "e4cf531246cbd3390c61a0cc9f4fbfea",
"assets/assets/images/icon-bubbles.png": "dc7b538967273adba316c93aae1f5269",
"assets/assets/images/icMobile.png": "8ec43d52139e47853ed8d612db0c2926",
"assets/assets/images/customer_registration_complete.png": "cc757a81bb1a5ac88f8115dd5ec42bb1",
"assets/assets/images/icc_send.png": "b44fc1f8df8a6ca2e2f03b90b3f90ad0",
"assets/assets/images/ic_cancel.png": "c94ca2776ce2a6cf65166980b107913f",
"assets/assets/images/my%2520position%2520drawable-xxxhdpi.png": "038d9d2cb25a73ce21eedfe6818e6256",
"assets/assets/images/ic_export.png": "4ef7ab4df41c0fc3723857200e98c333",
"assets/assets/images/nip.png": "0a7a4618b9a71168c7d9807865fd86f1",
"assets/assets/images/ill_exchange.png": "08d4424c605eb2f6f4fb9c843b5d7036",
"assets/assets/images/ic_unknown.png": "191c03d214666aa512b011f26ded10ae",
"assets/assets/images/applications_home.png": "35ecdf7cf5ce9735fa9b13f472ad7a80",
"assets/assets/images/splash.png": "d8fa3fbae5eb4cd46b034065e9ad645f",
"assets/assets/images/transfer_in_2.png": "d72afecb8de3142a546a29beea4dbc60",
"assets/assets/images/ic_edit.png": "affd0ea66a7ef9e328df2a015c582aa2",
"assets/assets/images/sidebar_icon_contacts.png": "b5091ee11f86fe01a7f7e55bde0bd547",
"assets/assets/images/sidebar_bg.png": "53b314808550da9867d9a60dd60b0cf1",
"assets/assets/images/merchant.png": "fd9ed39e95267c8ec93fc3265f9b44e4",
"assets/assets/images/icMapBlue.png": "e45da3696f72d5b41fbdbb13b0691a27",
"assets/assets/images/icHcsBlue.png": "7dbc5eca71e9106aae4ad71141dceb11",
"assets/assets/images/ic_cash.png": "d1d79fc4b00671c2e424d2d17963ebad",
"assets/assets/images/ic_register_new_customer.png": "962748b5335504f9baaf3cb3818b7a0d",
"assets/assets/images/ic_new_pin.png": "0841823e6a2ca1ba924665e1e1e305f5",
"assets/assets/images/beeline.png": "560ffc7bed6992290590012102b972cf",
"assets/assets/images/ic_internet_copy.png": "27a312d1647e88c1661926438ba5c150",
"assets/assets/images/groupRUR.png": "d702f904ac83be18cc366d4ad073ef5a",
"assets/assets/images/icInternetBlue.png": "19a164a95a494857ada6e1b974556104",
"assets/assets/images/icEditBlue.png": "fb1875df24809fa5c53565e1cee664c9",
"assets/assets/images/ic_baseline_play_circle_filled.png": "e0443c8ef291454c6cd639135d3d4d1a",
"assets/assets/images/ic-reverse.png": "2f89524e9c3eb2ac6d335f8fb016ed0b",
"assets/assets/images/logo.png": "c1a094fa2211c6833517783d82f51fa1",
"assets/assets/images/ic_loan.png": "b452b7145b6f8fc212e99a93c08c78a5",
"assets/assets/images/transfer_in_3.png": "d72afecb8de3142a546a29beea4dbc60",
"assets/assets/images/fr.json": "9781d534bf9e6041bf08275615e34705",
"assets/assets/images/icMoreBlue.png": "e1ccd1a6285d2ca54f55229827f19d4f",
"assets/assets/images/rounded_dollar.png": "ad9639c235437a430b7f5fa6226d838d",
"assets/assets/images/cross.png": "3104ddbf9b51cad36382abc19d286b52",
"assets/assets/images/ic_settings.png": "c3e21f87cbc5cff31b748e558a710148",
"assets/assets/images/sidebar_icon_locations.png": "42d5efb09eca73ce8f2f59bd204c38e2",
"assets/assets/images/cib_cc_visa.png": "304f887dd10e85c7f0793cb611b5d6f6",
"assets/assets/images/filter.png": "c5a8134f7a39f984a00ba95dbeaf45b3",
"assets/assets/images/bg1.png": "d42ba41c5cd2aab69cecd2cb6c3323fa",
"assets/assets/images/calendar.png": "9c842d97fb42ed8fd5d4f02e29210a61",
"assets/assets/images/ic-search.png": "a1c08f3e855eca69968f02da7df88ef4",
"assets/assets/images/ic_agent_to_pup_copy.png": "19a8ae255a63490ef5725f0c833a0eed",
"assets/assets/images/icn_generate_qr.png": "b0ba0dd117113020dccaa670f0d9d8f4",
"assets/assets/images/ic_transaction_copy_2.png": "c227f1abbe975d785ab86a726b797af8",
"assets/assets/images/home_goals.png": "2cf7eb2f17a62c97c03169d1fcceff79",
"assets/assets/images/ic_tv_copy.png": "e07db56a69eee7db15f789f2028e8b17",
"assets/assets/images/transfer_in_4.png": "d72afecb8de3142a546a29beea4dbc60",
"assets/assets/images/car.jpg": "7057c38a1a142990c159834e44ada567",
"assets/assets/images/il_payments.png": "48889125c83af1232de0f52e2531d307",
"assets/assets/images/my%2520position%2520drawable-xxhdpi.png": "55869161fff303df61f4901c7eac2b28",
"assets/assets/images/icCardBlue.png": "66db4edb611f2cac99391fd80caf0d54",
"assets/assets/images/sidebar-icon-phone.png": "49d9cc17de42fae30c52ff7005fea378",
"assets/assets/images/ic_mic.png": "8d1fd6fb05a422cdba6eec63c9d7a6a7",
"assets/assets/images/icWalletBlue.png": "f28df36696e2f1b082a7b4e998910633",
"assets/assets/images/ic_send.png": "b44fc1f8df8a6ca2e2f03b90b3f90ad0",
"assets/assets/images/ill_goals.png": "d4fdc009b218e0f937fd18b166b565fb",
"assets/assets/images/ic_account.png": "3c2fd19c4163362fc233b9e2b62a7e91",
"assets/assets/images/icCardVisa.png": "8587ad78fed7e8d7c5efba743ea2c075",
"assets/assets/images/totalsales.png": "9978997873edf97b56ee0242b0ef52b3",
"assets/assets/images/home_chat.png": "a51a2cdde5360085bc00e9ce4ed51ee2",
"assets/assets/images/pfm_4.png": "d482b5010a02118e5f75701d20f6cf52",
"assets/assets/images/acado.png": "fbdaf5abb229d60d6e4fcf3d86263986",
"assets/assets/images/ic_filters.png": "607de5200ea640309d4d0fb3e8459dfc",
"assets/assets/images/icWalletGray.png": "c0bc1035073d4c135a4b65da8feba4fb",
"assets/assets/images/ic_messages_2.png": "677be16cbb10cbd5ce8f0aee3ab08b9c",
"assets/assets/images/banner%25202.png": "9ca4ef989107b71c762126e0acf2009a",
"assets/assets/images/ic_wallet.png": "4961573271569ca346a8701dda3cd7e0",
"assets/assets/images/ic_growing.png": "27081e7fb31dec894cfee851c8c50760",
"assets/assets/images/cash.png": "4f93f4dd97020d752c4071dc32db57fb",
"assets/assets/images/ic_heath.png": "055196b6de43a26782bf6854b2a45a51",
"assets/assets/images/banner%25203.png": "8f3eae5135479dadb20264895c5d5083",
"assets/assets/images/ic_transaction_history.png": "3b26ab7dc9802cd0aba90565ff08219f",
"assets/assets/images/ic_postpaid_payment_copy.png": "d253979e1b62129512e27042f8953f71",
"assets/assets/images/ic_update.png": "ff9b38830c31ac45f1c9651f95495c64",
"assets/assets/images/ic_food.png": "b42f9d7c72a7abd9aff62f0b8277f74d",
"assets/assets/images/pfm_5.png": "ef67eda89783f604c9b7ac729451cb31",
"assets/assets/images/ic_menu.png": "2bc68da0d9414249d82fda4d3be4d897",
"assets/assets/images/star.png": "cb9e374c4a51bd92ee0b5db3964b4c3b",
"assets/assets/images/ic_arrow_drop_down.png": "ad6b98447378fa4a804668cd66a54f19",
"assets/assets/images/pfm_7.png": "3201115845dd55701f5b6b662e1a233c",
"assets/assets/images/star_outline.png": "107191b5c61d46d2a1928f388c8e76a1",
"assets/assets/images/il_cards.png": "b1c1999149b55215e55dd05f8a0a305b",
"assets/assets/images/icMoreGray.png": "bae57d46702e575b2a0f8279c0679d7c",
"assets/assets/images/banner%25201.png": "ae8803ae343e31606a1788411c307d90",
"assets/assets/images/ic_top_up.png": "420eead4ddbccbfc000833d37a67b8b2",
"assets/assets/images/ill_chat.png": "eab84c02d4cf3928631c9e75296e4394",
"assets/assets/images/sidebar_icon_templates.png": "54c80afe85fac3b511426794957c5aaa",
"assets/assets/images/more.png": "073577fbd3022b9e170f30f26d5c2b9a",
"assets/assets/images/ic_cash_out.png": "214041ce1b159eff1c968fb3a0bb7adf",
"assets/assets/images/ill_trading.png": "a9ddf1289304de12e40068b941951036",
"assets/assets/images/sidebar-icon-tv.png": "bda2143ac663b0575e97c9328ba03cb5",
"assets/assets/images/ic_deposit.png": "ab6baec35c10985d2d19275fca438cca",
"assets/assets/images/ill_receipt.png": "22b3173f9cfc1ddb1b4a613d2141c423",
"assets/assets/images/home_qr.png": "b4b182ff44ee0a120fab4f35c2f61133",
"assets/assets/images/pfm_6.png": "40adc324b742072096c5b1f7eac058f3",
"assets/assets/images/cib-cc-visa.png": "8574117b9f84bcdd88bbe65e5531c09f",
"assets/assets/images/icMapGray.png": "22c0c85cc6f57e9a0b3e177f52f9a548",
"assets/assets/images/logo_visa.png": "b86c75cde64ed8119ca1ff5a69d90fc8",
"assets/assets/images/pfm_2.png": "1de1761640fbe9892942f1d23af85cf3",
"assets/assets/images/il_qr.png": "7e83d9c87734a9869233ac0e7938ace1",
"assets/assets/images/groupEuro.png": "bf2e6ea4654b44fb09a600f521fc7cae",
"assets/assets/images/icn_total_sales.png": "95d815ac1342e21ad7148c07a648c543",
"assets/assets/images/icTopUpBlue.png": "67310b2aec870e3c00b9519a0907868a",
"assets/assets/images/ic_agent.png": "e2c39e9d0d306a23b26e1bf5fd7ca989",
"assets/assets/images/icLimitsBlue.png": "d3430c857494e49eb90d223c391b6f55",
"assets/assets/images/my%2520position%2520drawable-xhdpi.png": "60017252dc9616d740b1b35c86a6e251",
"assets/assets/images/notification.png": "346f17302617a5105336bc22aadf5dde",
"assets/assets/images/sber.png": "de88c0cf91b7670b6442a39b34318863",
"assets/assets/images/icn-cash_out-removebg-preview.png": "8a12dd32b9e78e77bcd05d9fc7f27a25",
"assets/assets/images/sidebar_icon_pfm.png": "7da5308785aea7a2c0dbe46fa37fbe35",
"assets/assets/images/zb_secondary.png": "3a25aaef6a5b814339fa72c5e9453186",
"assets/assets/images/merchant%2520drawable-hdpi.jpg": "873b656e535495d618be71f803e99d7e",
"assets/assets/images/ic-check.png": "5616f79e71bc907a967ae433a39ce2ff",
"assets/assets/images/ic_contact_us.png": "7405be9e72e05d9cd3e97a01924c8e47",
"assets/assets/images/ic_cash_in.png": "cad62a6dbdf75d1535bef33bc8681de6",
"assets/assets/images/pfm_3.png": "42864b92fba116b45d9aad94d3cf9ada",
"assets/assets/images/back.png": "e1f21707342cb0dc6388ce8298a79530",
"assets/assets/images/home_chat-removebg-preview.png": "beb80c1f82ef67e28b0ea57dc93413f9",
"assets/assets/images/ar.json": "dc48bbbe5b89f38e2b2f1f3a2f7645e6",
"assets/assets/images/icArrowRight.png": "c1c1401cf6583feacfcbafb9c7bb00b8",
"assets/assets/images/pfm_1.png": "40fc5f277e2a0461d3536e8e5408f00c",
"assets/assets/images/icn-cash_in-removebg-preview.png": "992ce6690bed4b227fb9de17d3fb9354",
"assets/assets/images/transaction_history_item_in.png": "a4cb61b8318c5a7021a7ac3c42fb0f5f",
"assets/assets/images/mini_wallet.png": "9b5f1017c34c4a41aebef1d5547cfb78",
"assets/assets/images/back-fixed.png": "4338718f796fda86d22abdbaccddc5f6",
"assets/assets/images/ic_transfer.png": "63cf79000159d79e8ce14e07d73a949c",
"assets/assets/images/ill_pfm.png": "2cc358a9bcb0b7c0894d22d8e8801210",
"assets/assets/images/9917-success.json": "8878b8df7e4fc5320da7062aa7161efe",
"assets/assets/images/ant_design_question_circle_filled_green.png": "45b2e2e5ed4daa62b83bb86ee422bc8f",
"assets/assets/images/sidebar_icon_trading.png": "94d4a15472edcb5f246d6d93ac56f6bc",
"assets/assets/images/coins.png": "9be6198ec8900ba76a5025880cd26a02",
"assets/assets/images/bg.png": "e4826e229ca6a5419398f970d41cd2fe",
"assets/assets/images/changing_pin_fail.png": "84abd03f5dc8f65009c5795a2ef68987",
"assets/assets/images/il_trading.png": "a9ddf1289304de12e40068b941951036",
"assets/assets/images/white_rect.png": "de33fdd3d96b65b607876b671a9eb57b",
"assets/assets/images/mic.png": "8d1fd6fb05a422cdba6eec63c9d7a6a7",
"assets/assets/images/my%2520position%2520drawable-mdpi.png": "025ad04922c82842bba6370130e3c2f6",
"assets/assets/Inter-Light.otf": "0a3d888e8c21923a1de1714e89bb8e01",
"assets/assets/Inter-ExtraLightItalic.otf": "0cdf5a0130e046efd9160bac71b0cb42",
"assets/assets/cert.pem": "fa6b44fab230249ad1f23520fe89d579",
"assets/assets/Inter-Medium.otf": "f012301391300867d30dc6a1564fcedc",
"assets/assets/rive/trading.riv": "d90f2bbc2fa1ba810fc71ed5570700f4",
"assets/assets/rive/icon.riv": "d8207f37d8c4269e3746040aa28352f0",
"assets/assets/rive/systemerror.riv": "58e3992c198ba64280100fc5e53632e4",
"assets/assets/rive/launch_splash.riv": "c15378508a1ad3b36474132e113bc464",
"assets/assets/rive/splash.riv": "3a64c487854f8e8cd1be7d8bcb0603d3",
"assets/assets/Inter-Regular.ttf": "99630f78ed3e2d3593dcb235bcc32ba8",
"assets/assets/trading_data.json": "66de6ccbcccc922db2e53f315e39ca47",
"assets/assets/Inter-SemiBold.otf": "814b360a54894a55ed713f44ff71bf2a",
"assets/assets/Inter-BlackItalic.otf": "5aa82504b14fb2baccefb2be5bd0575c",
"assets/assets/Inter-MediumItalic.otf": "d251153873207499750ecd7f631f7dd1",
"assets/assets/Inter-Black.otf": "30ba9d2aeccdb31f18f9a51ada31e125",
"assets/assets/Inter-ExtraBold.otf": "9abe7e7e02408c3d71b6f4442029b552",
"assets/assets/Inter-ThinItalic.otf": "68d5eccbb5f9380f4980bb359165e125",
"assets/assets/Inter-ExtraLight.otf": "233a7994c4891ef316b60ff2f418860a",
"assets/assets/webViewAutoText/sgb_credit.js": "d25b2caf19b1552cc91f746f52161cf0",
"assets/assets/webViewAutoText/wing.js": "3f193f0f8483a31183b3be52a5f9b81a",
"assets/assets/webViewAutoText/marketplace.js": "b71a867180bcc6bc70c20c40800638d4",
"assets/assets/Inter-ExtraBoldItalic.otf": "00814356f03b15b04fea23026aab33b5",
"assets/assets/Inter-BoldItalic.otf": "bc15d5294ed7ae49ba6494669e4137af",
"assets/assets/Inter-LightItalic.otf": "2c6a6b50ced943463617f91d126002c3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
