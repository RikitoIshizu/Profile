import Image from "next/image";
import CommonFrame from "@/components/CommonFrame";
import profileImg from "@/img/00keika01.jpg";

const profileList = [
  { id: "name", title: "名前", description: "石津勲人" },
  { id: "birthday", title: "誕生日", description: "1992年5月25日" },
  { id: "place", title: "出身", description: "茨城県" },
  {
    title: "得意な言語とFW",
    description: "",
    list: [
      "HTML/CSS",
      "JavaScript/TypeScript",
      "Vue.js/Nuxt.js",
      "React.js/Next.js",
      "SQL",
      "Go",
      "C#/.NET Framework",
    ],
  },
  {
    title: "趣味",
    description: "",
    list: [
      "ファッション",
      "ネイル",
      "デザイン",
      "アート",
      "学ぶこと",
      "アホなクチコミを書くこと",
    ],
  },
  {
    title: "お気に入りのアーティスト",
    description: "",
    list: [
      "NIGHTMARE",
      "vistlip",
      "the GazettE",
      "PIERROT",
      "kaggra,",
      "amazarashi",
    ],
  },
  {
    title: "大切にしていること",
    description: "",
    list: [
      "エンジニア志望またはエンジニア初心者の人の未来を潰すような公開処刑映像コンテンツには加担しないこと",
      "人の感情を逆撫でして論理性を語らないこと",
      "ブランド物を着ているエンジニアをいじめないこと",
      "いつも通り仕事しているブランド物を着ているエンジニアを仕事で理詰めしてブランド物の服を着ていることに罪悪感を感じさせないこと",
      "エンジニアの講座で登壇しているfemaleのエンジニアに対してかわいいとか美人とか講座と関係ない話題を出して困らせないこと",
      "エンジニアにエンジニアらしさを押し付けないこと",
    ],
  },
];

export default function Register() {
  return (
    <CommonFrame
      title="プロフィール"
      slotComponents={
        <>
          <Image
            src={profileImg}
            alt="Ishizuのイラスト"
            width="400"
            height="400"
            className="mx-auto"
          />
          <div className="px-40 mt-4">
            {profileList.map((el) => {
              return (
                <dl
                  key={el.id}
                  className="flex items-baseline mb-3 last:mb-0 text-base"
                >
                  <dt className="w-1/3">{el.title}</dt>
                  <dd className="w-2/3 text-xl pl-3 font-bold">
                    {!!el.description ? (
                      <span
                        dangerouslySetInnerHTML={{ __html: el.description }}
                      />
                    ) : null}
                    {!!el.list?.length ? (
                      <ul className="list-disc">
                        {el.list.map((li) => (
                          <li key={`list-${el.id}`}>{li}</li>
                        ))}
                      </ul>
                    ) : null}
                  </dd>
                </dl>
              );
            })}
          </div>
        </>
      }
    />
  );
}
