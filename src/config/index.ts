import type { Service } from '../types';

export const ABOUT_ME = `EsteticHairStudio to miejsce, w którym profesjonalnie i bardzo starannie zajmę się Twoimi włosami. Oferuję szeroki wachlarz usług fryzjersko-pielęgnacyjnych w najwyższym standardzie. Gwarantuję bezpieczeństwo i pełne zadowolenie z wykonanej przeze mnie pracy.
Świadczę takie usługi jak keratynowe prostowanie włosów, glow hair, rekonstrukcja na zimno, botox i inne zabiegi pielęgnacyjne. Podczas pracy korzystam z profesjonalnych produktów najwyższej jakości. Jestem po wielokrotnych szkoleniach od najlepszych specjalistów w Polsce.
Poznaj mnie bliżej w moich social mediach`;

export const ABOUT_ME_1 = `EsteticHairStudio to miejsce, w którym profesjonalnie i bardzo starannie zajmę się Twoimi włosami. Oferuję szeroki wachlarz usług fryzjersko-pielęgnacyjnych w najwyższym standardzie. Gwarantuję bezpieczeństwo i pełne zadowolenie z wykonanej przeze mnie pracy.`;

export const ABOUT_ME_2 = `Świadczę takie usługi jak keratynowe prostowanie włosów, glow hair, rekonstrukcja na zimno, botox i inne zabiegi pielęgnacyjne. Podczas pracy korzystam z profesjonalnych produktów najwyższej jakości. Jestem po wielokrotnych szkoleniach od najlepszych specjalistów w Polsce.`;

export const ABOUT_ME_3 = `Poznaj mnie bliżej w moich social mediach`;

export const INSTAGRAM_ACCOUNT_NAME = '@_Estetic_Hair_Studio';

export const INSTAGRAM_ACCOUNT_HREF = 'https://www.instagram.com/_Estetic_Hair_Studio/';

export const CONTACT_PHONE_NUMBER = '535-493-531';

export const CONTACT_EMAIL = 'skubisklaudia@icloud.com';

export const MY_OFFER_1 = `Prostowanie keratynowe to klasyk wśród zabiegów pielęgnacyjnych. Zadaniem keratyny jest wygładzić, ujarzmić, przedłużyć żywotność włosa oraz ułatwić codzienną stylizację. Keratyna uzupełnia ubytki we włosie i chroni włosy przed czynnikami zewnętrznymi. Ponadto zapewnia im elastyczność i połysk oraz zapobiega ich wypadaniu.
Wyprost włosa jest efektem ubocznym zabiegu.`;

export const MY_OFFER_2 = `Glow Hair to silna odbudowa i odżywienie włosów przy delikatnych właściwościach prostujących. Idealny zabieg dla włosów puszących się i pozbawionych blasku.
Botox to koktajl odżywczy dla włosów. Idealnie sprawdzi się przy włosach delikatnych cienkich i mocno zniszczonych, co jest efektem między innymi częstym rozjaśnianiem. Jest to zabieg silnie regenerujący.
Średni czas utrzymywania się botoxu to 2-3 miesiące.`;

export const MY_OFFER_3 = `Rekonstrukcja na zimno to zabieg mający na celu zniwelowanie zniszczeń w łodydze włosa, odżywienie kosmyków i poprawę ich wyglądu, a przede wszystkim odbudowanie i pobudzenie włosa do silnej regeneracji.`;

export const SERVICES_MOCK: Service[] = [
  {
    serviceName: 'Keratynowe prostowanie',
    pricing: [
      {
        type: 'Włosy krótkie',
        price: '290',
      },
      { type: 'Włosy średnie', price: '350' },
      { type: 'Włosy długie', price: '400/450' },
    ],
  },
  {
    serviceName: 'Botox',
    pricing: [
      { type: 'Włosy krótkie', price: '200' },
      { type: 'Włosy średnie', price: '250' },
      { type: 'Włosy długie', price: '300/350' },
    ],
  },

  {
    serviceName: 'Rekonstrukcja na zimno',
    pricing: [
      { type: 'Włosy krótkie', price: '200' },
      { type: 'Włosy średnie', price: '240' },
      { type: 'Włosy długie', price: '290/350' },
    ],
  },

  {
    serviceName: 'Glow Hair',
    pricing: [
      { type: 'Włosy krótkie', price: '200' },
      { type: 'Włosy średnie', price: '250' },
      { type: 'Włosy długie', price: '300/350' },
    ],
  },

  {
    serviceName: 'Nanoplastia',
    pricing: [
      { type: 'Włosy krótkie', price: '400' },
      { type: 'Włosy średnie', price: '450' },
      { type: 'Włosy długie', price: '500/700' },
    ],
  },

  {
    serviceName: 'Strzyżenie',
    pricing: [
      { type: 'Strzyżenie męskie', price: '35' },
      { type: 'Strzyżenie damskie', price: '50' },
    ],
  },
];
