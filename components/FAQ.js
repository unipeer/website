import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "Frequesntly asked questions",
  rows: [
    {
      title: "How many crypto currencies do you support on the app?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "#111827",
  titleTextSize: "28px",
  rowTitleColor: "black",
  rowContentTextSize: "16px",
  titleContentPaddingTop: "40px",
  // rowContentColor: 'grey',
  arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export default function FAQ() {
  return (
    <div
      className="my-12 lg:my-6 relative max-w-screen-xl mx-auto"
      id="faq"
      style={{ padding: "30px" }}
    >
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}
