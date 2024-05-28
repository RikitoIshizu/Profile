"use client";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import CommonFrame from "@/components/CommonFrame";
import dynamic from "next/dynamic";
const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
  }
);

Font.register({
  family: "NotoSansJP",
  fonts: [
    {
      src: "@/public/fonts/NotoSansJP-Regular.ttf",
    },
    {
      src: "@/public/fonts/NotoSansJP-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "NotoSansJP",
    padding: 30,
    fontSize: 11,
    textAlign: "center",
    width: "100%",
  },
  title: {
    fontSize: 18,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function Consent() {
  return (
    <CommonFrame
      title="石津勲人とお酒を飲みたくなったら"
      slotComponents={
        <>
          <p>
            僕、石津勲人は基本的に飲み会に参加することはありません。
            <br />
            自身の命を守るためです。
            <br />
            そのため、複数人でお酒を飲む場合、「問題ない」と判断した方とのみ、飲むことはあります。
            <br />
            どうしても飲みたい場合は、以下の誰一人として同意できないであろう同意書に氏名・住所を記入していただき、捺印をお願いいたします。
          </p>
          <PDFViewer width="100%" height="100%" className="h-[430px] mt-4">
            <Document title="石津勲人を飲食の場に誘うことに関する同意書">
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text style={styles.title}>
                    石津勲人を飲食の場に誘うことに関する同意書
                  </Text>
                  <Text>Section #2</Text>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        </>
      }
    />
  );
}
