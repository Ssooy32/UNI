/**
 * 치이카와 도감 데이터 및 상호작용 스크립트
 */

const characters = [
  {
    id: "chiikawa",
    name: "치이카와",
    jpName: "ちいかわ (Chiikawa)",
    category: "main",
    subtext: "소심하지만 용기 있는 다정한 울보",
    desc: "작품의 메인 주인공! 소심하고 겁이 많아 사소한 일에도 눈물을 글썽이지만, 친구들이 위험에 처했을 때는 깜짝 놀랄 만큼 큰 용기를 발휘해요. 요거트 뚜껑 핥기와 푸딩을 좋아하며 열심히 제초 시험 공부를 하고 있어요.",
    img: "images/chiikawa.png",
    bg: "#FFF0F4",
    accent: "#FFB8C6",
    accentDark: "#E25875",
    tags: ["주인공", "울보", "포셰트", "친구바보"],
    feature: "하얗고 둥근 몸, 핑크빛 뺨, 꼬리",
    weapon: "핑크색 사스마타 (가시 찌르개)",
    hobby: "제초 자격증 공부, 맛있는 간식 먹기",
    quote: "와앗...!(ワッ...!) / 에엣?(エッ?) / 후와아~",
    speechVoice: "와아앗~! 후와아아~! 🥺",
    speechPitch: 1.6,
    speechRate: 1.1
  },
  {
    id: "hachiware",
    name: "하치와레",
    jpName: "ハチワレ (Hachiware / 가르마)",
    category: "main",
    subtext: "밝고 씩씩한 최고의 마당발 친구",
    desc: "파란색 털이 머리 가운데로 가르마처럼 나 있는 고양이 형태의 친구. 치이카와 일행 중 유일하게 말을 능숙하게 할 수 있으며 호기심과 친절함이 넘쳐납니다. 동굴에 살며 기타를 치며 노래 부르는 것을 좋아해요. '어떻게든 될 거야!(なんとかなれーッ!)'가 대표 주문!",
    img: "images/hachiware.png",
    bg: "#EFF7FF",
    accent: "#B3DAFF",
    accentDark: "#3B8AC4",
    tags: ["말할 줄 앎", "동굴 거주", "기타 연주", "의리파"],
    feature: "파란 앞머리 가르마 무늬, 고양이 귀",
    weapon: "파란색 사스마타",
    hobby: "사진 찍기(일회용 카메라), 버스킹, 기타",
    quote: "어떻게든 될 거야~! (なんとかなれーッ!)",
    speechVoice: "어떻게든 될 거야~ッ! (なんとかなれーッ!) 😸",
    speechPitch: 1.3,
    speechRate: 1.05
  },
  {
    id: "usagi",
    name: "우사기",
    jpName: "うさぎ (Usagi / 토끼)",
    category: "main",
    subtext: "신출귀몰! 거침없는 행동파 마이웨이",
    desc: "언제나 예측 불가능한 기행을 일삼는 자유로운 영혼의 토끼. '우라!', '야하!', '푸루루루루' 같은 기괴하고 귀여운 괴성을 내며 다닙니다. 장난꾸러기지만 제초 3급 자격증을 보유하고 있고 토벌 실력도 매우 뛰어난 최강자 중 한 명입니다.",
    img: "images/usagi.png",
    bg: "#FFFDF0",
    accent: "#FFE885",
    accentDark: "#D6A300",
    tags: ["제초 3급", "자유인", "괴성 마스터", "토벌 실력자"],
    feature: "긴 두 귀, 통통한 꼬리, 노란빛 털",
    weapon: "마법의 양끝 화약 봉",
    hobby: "괴성 지르기, 맛있는 것 찾아다니기, 댄스",
    quote: "야하-! (ヤハッ!) / 우라-! (ウラッ!) / 푸루루루루!",
    speechVoice: "야-하! 우라라라라~! 푸루루루루~! 🐰",
    speechPitch: 1.7,
    speechRate: 1.4
  },
  {
    id: "momonga",
    name: "모몽가",
    jpName: "モモンガ (Momonga / 하늘다람쥐)",
    category: "friends",
    subtext: "귀여움 받기를 갈망하는 뻔뻔한 매력",
    desc: "풍성하고 커다란 꼬리가 매력적인 하늘다람쥐. '나를 귀여워해라!'라며 갑옷 씨들에게 억지 애교를 부리거나 심술을 부립니다. 귀여운 외모 이면에 뭔가 수상한 과거와 비밀을 감추고 있는 입체적인 인기 캐릭터예요.",
    img: "images/momonga.png",
    bg: "#F5F3FF",
    accent: "#D8CCFF",
    accentDark: "#7B5EC9",
    tags: ["애교 강요", "풍성한 꼬리", "비밀 보유", "뻔뻔함"],
    feature: "청록색 눈동자, 몽실몽실한 거대 꼬리",
    weapon: "온몸을 던지는 애교와 앙탈",
    hobby: "귀여움 강탈하기, 맛있는 음식 빼앗아 먹기",
    quote: "칭찬해라! 귀여워해라-! (ほめろッ!)",
    speechVoice: "날 당장 귀여워해라-ッ! 칭찬해라! 🐿️",
    speechPitch: 1.4,
    speechRate: 1.1
  },
  {
    id: "kurimanju",
    name: "쿠리만쥬",
    jpName: "くりまんじゅう (Kurimanju / 밤만쥬)",
    category: "friends",
    subtext: "한 잔의 여유를 아는 미식가 아저씨",
    desc: "밤만쥬를 쏙 빼닮은 과묵한 미식가. 귀여운 외형과 달리 어른스러운 행동과 깊은 풍미의 안주를 즐깁니다. 시원한 음료나 술을 마신 뒤 '크으으~(ハーッ)' 하는 깊은 탄성을 내뿜는 것이 트레이드마크! 평소엔 다정해서 치이카와들에게 간식을 나눠줍니다.",
    img: "images/kurimanju.png",
    bg: "#FFF6ED",
    accent: "#F3C59A",
    accentDark: "#BD6F29",
    tags: ["음주 면허", "미식가", "크으으~", "어른미"],
    feature: "머리 위의 밤색 껍질 무늬, 통통한 볼",
    weapon: "음주 면허증 & 일품 안주 페어링",
    hobby: "제초 노동 후 혼술, 정갈한 요리",
    quote: "하-앗...! (ハーッ…!) 크으으으...",
    speechVoice: "꿀꺽... 꿀꺽... 하-앗...! 크으으-! 🍶",
    speechPitch: 0.8,
    speechRate: 0.85
  },
  {
    id: "rakko",
    name: "랏코",
    jpName: "ラッコ (Rakko / 해달)",
    category: "friends",
    subtext: "토벌 랭킹 1위의 든든한 상남자 스승님",
    desc: "이마에 멋진 십자 흉터가 있는 해달 검사. 위험한 괴물들을 척척 물리치는 토벌 랭킹 1위의 영웅입니다. 치이카와와 하치와레의 존경을 받는 스승님이지만, 사실 달콤한 파르페나 디저트를 먹으면 볼을 붉히며 행복해하는 귀여운 반전 매력의 소유자!",
    img: "images/rakko.png",
    bg: "#FFF9EB",
    accent: "#FBE0A2",
    accentDark: "#C78D1E",
    tags: ["랭킹 1위", "망토", "스승님", "디저트 덕후"],
    feature: "이마의 십자 흉터, 멋진 망토, 자가용 자동차",
    weapon: "한손검 (전설급 검술)",
    hobby: "드라이브, 디저트 카페 탐방",
    quote: "강해졌구나... 나의 차에 타라.",
    speechVoice: "음! 나의 차에 타라. 달콤한 것을 먹으러 가지. 🗡️",
    speechPitch: 0.75,
    speechRate: 0.95
  },
  {
    id: "shisa",
    name: "시사",
    jpName: "シーサー (Shisa / 시사)",
    category: "friends",
    subtext: "오키나와 감성의 성실하고 다정한 알바생",
    desc: "오키나와의 수호신 '시사'를 모티브로 한 활기찬 캐릭터. 라멘 전문점 '로(郎)'에서 아르바이트를 하고 있으며, 무려 슈퍼 알바 자격증(오사케 면허)을 성실하게 취득한 노력파입니다. 특유의 '우레시사(기뻐시사)~' 말장난이 사랑스러워요.",
    img: "images/shisa.png",
    bg: "#FFF4EB",
    accent: "#FFD0A8",
    accentDark: "#DF6D1D",
    tags: ["슈퍼 알바생", "라멘 로(郎)", "오키나와", "노력파"],
    feature: "사자 갈기 같은 곱슬머리, 활짝 웃는 입",
    weapon: "라멘 조리 도구 및 성실한 서비스 정신",
    hobby: "산사태(사타안다기) 튀기기, 인사 연습",
    quote: "우레시사-! (うれシーサー!) 기뻐시사!",
    speechVoice: "우레시사-! (기뻐시사!) 어서오세요! 🍜",
    speechPitch: 1.25,
    speechRate: 1.15
  },
  {
    id: "furuhonya",
    name: "후루혼야 (카니)",
    jpName: "古本屋 / カニ (Furuhonya / 게)",
    category: "friends",
    subtext: "수줍음 많지만 다정한 책방 주인",
    desc: "길가에서 헌책방 노점을 운영하는 조용하고 상냥한 친구. 모몽가의 억지 애교를 유일하게 따뜻하게 받아주며 단짝 친구가 되어줍니다. 머리에 귀여운 꽃게 집게발 모양 머리띠를 착용하고 있어요.",
    img: "images/furuhonya.png",
    bg: "#FFF0F1",
    accent: "#FFCCD2",
    accentDark: "#D65063",
    tags: ["헌책방", "모몽가 친구", "게 머리띠", "다정함"],
    feature: "분홍빛 털, 게 집게발 모양 머리 장식",
    weapon: "따뜻한 공감 능력과 헌책 지식",
    hobby: "헌책 정리, 모몽가와 산책하기",
    quote: "책 읽어볼래...? (本、読む...?)",
    speechVoice: "모몽가... 오늘도 같이 책 볼래? 🦀📖",
    speechPitch: 1.3,
    speechRate: 0.95
  },
  {
    id: "pochette_yoroi",
    name: "포셰트 갑옷 씨",
    jpName: "ポシェットの鎧さん (Pochette Yoroi-san)",
    category: "yoroi",
    subtext: "손재주가 뛰어나고 귀여운 걸 좋아하는 갑옷 씨",
    desc: "회색빛 갑옷을 입은 세계관 관리자 중 한 명. 손재주가 매우 뛰어나 수제 파우치나 곰돌이 포셰트, 파자마 등을 만들어 팝니다. 치이카와에게 포셰트를 선물한 장본인으로, 치이카와 일행을 무척 아끼고 챙겨주는 든든한 삼촌 같은 존재예요.",
    img: "images/pochette_yoroi.png",
    bg: "#F2F5F8",
    accent: "#CADBEA",
    accentDark: "#4A7297",
    tags: ["수공예", "포셰트 제작", "치이카와 팬", "회색 갑옷"],
    feature: "회색 전신 플레이트 갑옷, 털실과 바늘",
    weapon: "뛰어난 재봉 및 공예 기술",
    hobby: "아기자기한 소품 제작, 치이카와 지켜보기",
    quote: "이거 한번 메볼래? 너한테 줄게.",
    speechVoice: "오, 치이카와! 새 포셰트 만들었는데 메볼래? 🧵",
    speechPitch: 0.85,
    speechRate: 1.0
  },
  {
    id: "labor_yoroi",
    name: "노동 갑옷 씨",
    jpName: "労働の鎧さん (Labor Yoroi-san)",
    category: "yoroi",
    subtext: "제초와 토벌 업무를 총괄하는 관리자",
    desc: "황갈색 갑옷을 착용하고 있으며, 치이카와들에게 제초 작업이나 토벌 퀘스트를 배분하고 보수를 정산해 주는 업무 담당자입니다. 모몽가의 끝없는 애교 공격에 늘 당황하면서도 묵묵히 업무를 처리하는 현실적인 성격입니다.",
    img: "images/labor_yoroi.png",
    bg: "#FAF4EF",
    accent: "#E9DACB",
    accentDark: "#85654B",
    tags: ["업무 접수", "보수 정산", "모몽가 전담", "갈색 갑옷"],
    feature: "구릿빛/갈색 갑옷, 업무 장부",
    weapon: "보수 정산기 및 접수 카운터",
    hobby: "일과 후 맥주 한 잔, 업무 일지 정리",
    quote: "오늘 제초 몫은 여기다. 수고했다!",
    speechVoice: "오늘 몫의 보수다! 다치지 말고 잘 다녀와. 📋",
    speechPitch: 0.8,
    speechRate: 1.0
  },
  {
    id: "ramen_yoroi",
    name: "라멘 갑옷 씨",
    jpName: "ラーメンの鎧さん (Ramen Yoroi-san)",
    category: "yoroi",
    subtext: "인기 라멘집 '로(郎)'의 엄격하고 정직한 점주",
    desc: "주황빛 갑옷을 입고 하얀 두건을 두른 라멘 장인. 치이카와 세계관 최고의 맛집 '로(郎)'를 운영합니다. 손님들이 주문 룰을 지키도록 엄격하게 지도하지만, 열심히 노력하는 시사를 조수로 받아들이고 아끼는 츤데레 매력이 있습니다.",
    img: "images/ramen_yoroi.png",
    bg: "#FFF3E8",
    accent: "#F8CCA9",
    accentDark: "#C45B1A",
    tags: ["라멘집 점주", "두건", "시사의 스승", "주황 갑옷"],
    feature: "주황색 갑옷과 하얀 두건, 라멘 국자",
    weapon: "진한 돈코츠 육수와 면 뽑기 기술",
    hobby: "신메뉴 연구, 육수 고기 끓이기",
    quote: "주문할 거면 확실하게 마늘 넣을지 말해!",
    speechVoice: "어서 오십쇼! 마늘 넣을 건가?! 🍜🔥",
    speechPitch: 0.75,
    speechRate: 1.05
  },
  {
    id: "chiikabu",
    name: "치이카부 (작은 투구벌레)",
    jpName: "ちいかぶ / カブトムシ (Chiikabu / Kabutomushi)",
    category: "special",
    subtext: "달콤한 와플을 좋아했던 치이카와의 작은 친구",
    desc: "동굴 안에서 발견되어 치이카와가 소중히 보살펴 주었던 작은 투구벌레. 치이카와에게 안기며 달콤한 와플을 먹는 모습으로 큰 힐링을 선사했지만... 세계관 특유의 충격적인 반전을 남긴 인상 깊은 캐릭터입니다.",
    img: "images/chiikabu.png",
    bg: "#F2F8F4",
    accent: "#C1E4CD",
    accentDark: "#378253",
    tags: ["투구벌레", "와플 사랑", "반전의 존재", "힐링"],
    feature: "작은 뿔, 둥글둥글한 몸체, 와플 사랑",
    weapon: "치명적인 귀여움과 달콤한 냄새",
    hobby: "와플 먹기, 치이카와 품에 안기기",
    quote: "바움... 뇸뇸... (와플 섭취 중)",
    speechVoice: "뇸뇸뇸... 와플 맛있어...! 🧇✨",
    speechPitch: 1.5,
    speechRate: 1.2
  },
  {
    id: "anoko",
    name: "그 아이 (아노코)",
    jpName: "あのこ (Ano ko)",
    category: "special",
    subtext: "과거의 기억을 품고 거대화된 강력한 괴물",
    desc: "숲속에서 등장하는 거대한 키메라형 괴물. 강력한 괴력과 긴 꼬리를 가졌으며, 과거 치이카와와 함께 공장에서 일했던 작은 존재였다는 슬픈 암시가 깃들어 있습니다. 개구리와 벌레를 건드리며 과거를 회상하는 독특한 감성을 풍깁니다.",
    img: "images/anoko.png",
    bg: "#F6F5F8",
    accent: "#D6D1E6",
    accentDark: "#675A88",
    tags: ["거대 괴물", "키메라", "과거의 기억", "강력함"],
    feature: "호랑이 같은 줄무늬 거구, 거대한 꼬리와 발톱",
    weapon: "압도적인 괴력과 꼬리 휘두르기",
    hobby: "작은 곤충 관찰, 과자 포장지 만지작거리기",
    quote: "크아아아-앙! (그리운 몸짓을 하며)",
    speechVoice: "크아아아-앙! ...기억하고 있어. 🐾⚡",
    speechPitch: 0.6,
    speechRate: 0.8
  }
];

// DOM 요소 참조
const grid = document.getElementById("charactersGrid");
const noResults = document.getElementById("noResults");
const filterBtns = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearSearch");

// Modal 요소
const modal = document.getElementById("charModal");
const modalClose = document.getElementById("modalClose");
const modalImg = document.getElementById("modalImg");
const modalVisual = document.getElementById("modalVisual");
const modalTags = document.getElementById("modalTags");
const modalName = document.getElementById("modalName");
const modalJpName = document.getElementById("modalJpName");
const modalCatchphrase = document.getElementById("modalCatchphrase");
const modalDesc = document.getElementById("modalDesc");
const modalFeature = document.getElementById("modalFeature");
const modalWeapon = document.getElementById("modalWeapon");
const modalHobby = document.getElementById("modalHobby");
const modalQuote = document.getElementById("modalQuote");
const soundBtn = document.getElementById("soundBtn");
const speechBubble = document.getElementById("speechBubble");

let currentFilter = "all";
let currentSearch = "";
let currentChar = null;

// 카드 렌더링 함수
function renderCards() {
  grid.innerHTML = "";
  
  const filtered = characters.filter((c) => {
    const matchFilter = currentFilter === "all" || c.category === currentFilter;
    const query = currentSearch.toLowerCase().trim();
    const matchSearch =
      !query ||
      c.name.toLowerCase().includes(query) ||
      c.jpName.toLowerCase().includes(query) ||
      c.subtext.toLowerCase().includes(query) ||
      c.desc.toLowerCase().includes(query) ||
      c.tags.some((t) => t.toLowerCase().includes(query));
    
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }

  filtered.forEach((char) => {
    const card = document.createElement("div");
    card.className = "char-card";
    card.style.setProperty("--card-bg", char.bg);
    card.style.setProperty("--card-accent", char.accent);
    card.style.setProperty("--card-accent-dark", char.accentDark);
    card.style.setProperty("--card-accent-soft", char.bg);

    const categoryNames = {
      main: "주인공 삼총사 ✨",
      friends: "숲속 친구들 🌿",
      yoroi: "갑옷 관리자 🛡️",
      special: "특별한 존재 🔮"
    };

    const tagsHtml = char.tags
      .slice(0, 3)
      .map((t) => `<span class="tag-pill">#${t}</span>`)
      .join("");

    card.innerHTML = `
      <div class="card-banner">
        <span class="card-category-badge">${categoryNames[char.category] || "도감"}</span>
        <div class="card-img-wrap">
          <img src="${char.img}" alt="${char.name}" loading="lazy" />
        </div>
      </div>
      <div class="card-body">
        <div class="card-title-row">
          <h3 class="card-name">${char.name}</h3>
          <span class="card-jp">${char.jpName.split(" ")[0]}</span>
        </div>
        <p class="card-subtext">${char.subtext}</p>
        <p class="card-desc">${char.desc}</p>
        <div class="card-tags">${tagsHtml}</div>
        <button class="card-footer-btn">상세 프로필 보기 🐾</button>
      </div>
    `;

    card.addEventListener("click", () => openModal(char));
    grid.appendChild(card);
  });
}

// 모달 열기
function openModal(char) {
  currentChar = char;
  modalImg.src = char.img;
  modalImg.alt = char.name;
  modalVisual.style.backgroundColor = char.bg;
  modalName.textContent = char.name;
  modalJpName.textContent = char.jpName;
  modalCatchphrase.textContent = char.subtext;
  modalDesc.textContent = char.desc;
  modalFeature.textContent = char.feature;
  modalWeapon.textContent = char.weapon;
  modalHobby.textContent = char.hobby;
  modalQuote.textContent = char.quote;

  modalTags.innerHTML = char.tags
    .map((t) => `<span class="tag-pill" style="background:${char.bg}; color:${char.accentDark}; border:1px solid ${char.accent};">#${t}</span>`)
    .join("");

  speechBubble.style.display = "none";
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// 모달 닫기
function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
  speechBubble.style.display = "none";
}

// 음성 및 말풍선 효과 (Web Speech Synthesis 활용)
function playCharacterSound() {
  if (!currentChar) return;

  // 말풍선 표시
  speechBubble.textContent = currentChar.speechVoice;
  speechBubble.style.display = "block";

  // Web Speech API가 지원되는 경우 음성 재생
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel(); // 이전 재생 취소
    const utterance = new SpeechSynthesisUtterance(currentChar.speechVoice.replace(/[^\w\sㄱ-ㅎㅏ-ㅣ가-힣~!?-]/g, ""));
    utterance.lang = "ko-KR";
    utterance.pitch = currentChar.speechPitch || 1.2;
    utterance.rate = currentChar.speechRate || 1.1;
    window.speechSynthesis.speak(utterance);
  }
}

// 필터 버튼 클릭 이벤트
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderCards();
  });
});

// 검색 이벤트
searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  clearBtn.style.display = currentSearch ? "flex" : "none";
  renderCards();
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  currentSearch = "";
  clearBtn.style.display = "none";
  searchInput.focus();
  renderCards();
});

// 모달 이벤트
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

soundBtn.addEventListener("click", playCharacterSound);

// ==========================================================
// 탭 전환 (도감 <-> 성향 테스트)
// ==========================================================
const tabBookBtn = document.getElementById("tabBookBtn");
const tabQuizBtn = document.getElementById("tabQuizBtn");
const bookControls = document.getElementById("bookControls");
const bookSection = document.getElementById("bookSection");
const quizSection = document.getElementById("quizSection");

function switchTab(tab) {
  if (tab === "book") {
    tabBookBtn.classList.add("active");
    tabQuizBtn.classList.remove("active");
    bookControls.style.display = "block";
    bookSection.style.display = "block";
    quizSection.style.display = "none";
  } else {
    tabQuizBtn.classList.add("active");
    tabBookBtn.classList.remove("active");
    bookControls.style.display = "none";
    bookSection.style.display = "none";
    quizSection.style.display = "block";
  }
}

tabBookBtn.addEventListener("click", () => switchTab("book"));
tabQuizBtn.addEventListener("click", () => switchTab("quiz"));

// ==========================================================
// 치이카와 성향 테스트 (Quiz Engine)
// ==========================================================

const quizQuestions = [
  {
    emoji: "🧭",
    question: "주말이나 쉬는 날, 갑자기 자유 시간이 생겼을 때 나의 행동은?",
    answers: [
      {
        text: "일단 맛있는 간식이나 디저트를 챙겨놓고 이불 속에서 뒹굴거린다.",
        scores: { chiikawa: 3, furuhonya: 2 }
      },
      {
        text: "친구들에게 먼저 '오늘 뭐 해?' 연락해서 신나게 놀러 나간다.",
        scores: { hachiware: 3, shisa: 1 }
      },
      {
        text: "계획? 그런 건 없다! 발길 닿는 대로 즉흥 탐험을 떠난다.",
        scores: { usagi: 3, rakko: 1 }
      },
      {
        text: "좋아하는 술이나 요리를 직접 해 먹으며 혼자만의 낭만을 만끽한다.",
        scores: { kurimanju: 3, pochette_yoroi: 1 }
      }
    ]
  },
  {
    emoji: "⚡",
    question: "예상치 못한 위기나 곤란한 시험 상황에 맞닥뜨렸을 때 나는?",
    answers: [
      {
        text: "순간 머리가 하얘지고 눈물이 핑 돌지만, 어떻게든 끝까지 버텨낸다.",
        scores: { chiikawa: 3, furuhonya: 1 }
      },
      {
        text: "'어떻게든 될 거야!' 긍정 회로를 돌리며 차근차근 해결책을 찾는다.",
        scores: { hachiware: 3, shisa: 2 }
      },
      {
        text: "두려움 따윈 없다! 정면 돌파하며 신명 나게 파헤쳐 버린다.",
        scores: { usagi: 3, rakko: 1 }
      },
      {
        text: "차분하게 주위를 지켜보며 나의 실력이나 주변의 도움을 활용한다.",
        scores: { rakko: 3, kurimanju: 2 }
      }
    ]
  },
  {
    emoji: "👥",
    question: "모임이나 친구들 사이에서 나의 주된 포지션은?",
    answers: [
      {
        text: "나한테 관심 집중! 끊임없이 사랑받고 칭찬받아야 직성이 풀린다.",
        scores: { momonga: 3 }
      },
      {
        text: "대화를 주도하고 모두가 어색하지 않게 분위기를 북돋우는 분위기 메이커.",
        scores: { hachiware: 3, shisa: 1 }
      },
      {
        text: "말없이 든든하게 챙겨주거나 뒤에서 묵묵히 지원해 주는 든든한 멘토.",
        scores: { rakko: 2, pochette_yoroi: 3, labor_yoroi: 2 }
      },
      {
        text: "조용히 친구들의 이야기를 경청하며 따뜻하게 공감해 주는 힐러.",
        scores: { chiikawa: 2, furuhonya: 3 }
      }
    ]
  },
  {
    emoji: "🎯",
    question: "원하는 자격증이나 목표가 생겼을 때 나의 태도는?",
    answers: [
      {
        text: "한 번에 안 붙더라도 눈물 젖은 노력을 쏟아부으며 계속 도전한다.",
        scores: { chiikawa: 3, shisa: 2 }
      },
      {
        text: "남들보다 엄청난 집중력으로 어느샌가 이미 자격증을 손에 쥐고 있다.",
        scores: { usagi: 3, rakko: 2 }
      },
      {
        text: "친구와 함께 스터디를 꾸리며 서로 격려하고 자료를 나눈다.",
        scores: { hachiware: 3, furuhonya: 1 }
      },
      {
        text: "목표를 위해 밤낮없이 땀 흘려 일하고 실전에서 확실하게 증명한다.",
        scores: { shisa: 3, labor_yoroi: 2 }
      }
    ]
  },
  {
    emoji: "🍽️",
    question: "친구가 맛있는 음식을 사 들고 찾아왔을 때 나의 반응은?",
    answers: [
      {
        text: "너무 고마워서 감동의 눈물을 흘리며 아껴 먹는다.",
        scores: { chiikawa: 3, furuhonya: 1 }
      },
      {
        text: "신나서 박수를 치며 바로 인증샷을 찍고 행복하게 나눠 먹는다.",
        scores: { hachiware: 3, shisa: 1 }
      },
      {
        text: "와아앗! 괴성을 지르며 순식간에 가장 맛있는 부위를 한입에 흡입한다.",
        scores: { usagi: 3, momonga: 2 }
      },
      {
        text: "어울리는 음료나 주류를 꺼내와 완벽한 페어링을 즐긴다.",
        scores: { kurimanju: 3, pochette_yoroi: 1 }
      }
    ]
  },
  {
    emoji: "💬",
    question: "친구가 힘든 고민을 털어놓으며 눈물을 흘린다면?",
    answers: [
      {
        text: "친구의 아픔에 깊이 이입해서 나도 모르게 같이 훌쩍이며 손을 꼭 잡아준다.",
        scores: { chiikawa: 3, furuhonya: 2 }
      },
      {
        text: "'너는 정말 잘하고 있어!' 긍정의 위로와 함께 힘이 나는 따뜻한 밥을 사준다.",
        scores: { hachiware: 3, shisa: 2 }
      },
      {
        text: "원인 문제를 즉시 해결해 주기 위해 조언과 실질적인 대책을 내놓는다.",
        scores: { rakko: 3, pochette_yoroi: 2 }
      },
      {
        text: "'내 귀여운 얼굴이나 보고 힘내라!' 하며 엉뚱한 행동으로 웃게 만든다.",
        scores: { momonga: 3, usagi: 2 }
      }
    ]
  },
  {
    emoji: "🍰",
    question: "나만의 스트레스 해소 비법은?",
    answers: [
      {
        text: "달콤하고 포근한 파르페나 디저트를 몰래 숨어서 행복하게 먹기.",
        scores: { rakko: 3, chiikawa: 1 }
      },
      {
        text: "목 넘김이 시원한 음료를 들이켜고 '크으으~' 소리 내어 털어내기.",
        scores: { kurimanju: 3 }
      },
      {
        text: "큰 소리로 노래를 부르거나 신나는 악기 연주, 혹은 온몸을 흔드는 춤!",
        scores: { hachiware: 2, usagi: 3 }
      },
      {
        text: "책을 읽거나 예쁜 소품을 만들며 조용하고 차분하게 마음 정돈하기.",
        scores: { furuhonya: 3, pochette_yoroi: 2 }
      }
    ]
  },
  {
    emoji: "✨",
    question: "인생을 살아갈 때 내가 가장 중요하게 생각하는 가치는?",
    answers: [
      {
        text: "마음 맞는 소중한 친구들과 소소한 일상을 공유하는 다정함.",
        scores: { chiikawa: 3, hachiware: 2 }
      },
      {
        text: "누구의 눈치도 보지 않고 온전히 나답게 즐기는 자유와 스릴.",
        scores: { usagi: 3, momonga: 1 }
      },
      {
        text: "자신의 한계를 뛰어넘어 모두에게 인정받는 실력과 명예.",
        scores: { rakko: 3, shisa: 2 }
      },
      {
        text: "하루 일과를 무탈히 마치고 누리는 정갈한 식사와 한 잔의 여유.",
        scores: { kurimanju: 3, labor_yoroi: 2 }
      }
    ]
  }
];

// 결과 캐릭터 상세 데이터
const quizResultsData = {
  chiikawa: {
    name: "치이카와",
    sub: "소심하지만 용기 있는 다정한 힐러",
    img: "images/chiikawa.png",
    bg: "#FFF0F4",
    quote: "와앗...! 눈물이 날 것 같지만... 친구를 위해서라면 용기를 낼 거야!",
    trait: "마음이 여리고 따뜻하며, 작은 일에도 깊이 감동하는 섬세한 영혼입니다. 겉으로는 조용하고 소심해 보이지만, 소중한 사람을 지켜야 할 때는 놀라운 잠재력과 용기를 발휘하는 외유내강형입니다.",
    situations: [
      "힘든 일을 겪으면 속상해서 눈물이 먼저 나지만 끝까지 포기하지 않아요.",
      "친구가 기뻐하는 모습을 보는 것만으로도 하루 종일 행복해요.",
      "맛있는 디저트나 간식 앞에서는 세상에서 가장 행복한 미소를 지어요."
    ],
    best: "하치와레 🐱 (나를 믿고 든든하게 이끌어주는 최고의 단짝!)",
    worst: "모몽가 🐿️ (갑작스러운 억지 앙탈에 깜짝 놀라 당황할 수 있어요)"
  },
  hachiware: {
    name: "하치와레",
    sub: "무한 긍정의 마당발 해결사",
    img: "images/hachiware.png",
    bg: "#EFF7FF",
    quote: "어떻게든 될 거야-ッ! (なんとかなれーッ!)",
    trait: "호기심과 친화력이 넘치며, 어떤 난관이 닥쳐도 '어떻게든 될 거야!'라는 긍정의 힘으로 극복하는 분위기 메이커입니다. 친구들의 기분을 배려하는 따뜻한 말솜씨와 헌신적인 의리를 갖추고 있습니다.",
    situations: [
      "곤란한 상황에서도 침착하게 웃으며 해결책을 찾아내요.",
      "처음 만난 사람과도 5분 만에 친구가 되는 놀라운 친화력의 소유자!",
      "소소한 발견이나 소중한 순간을 사진이나 일기로 기록하는 걸 좋아해요."
    ],
    best: "치이카와 🐹 (지켜주고 챙겨주고 싶은 소중한 단짝!)",
    worst: "모몽가 🐿️ (끝없는 귀여움 요구에 살짝 진땀을 흘릴지도 몰라요)"
  },
  usagi: {
    name: "우사기",
    sub: "신출귀몰! 거침없는 행동파 최강자",
    img: "images/usagi.png",
    bg: "#FFFDF0",
    quote: "야-하! 우라라라라~! 푸루루루루~!!",
    trait: "남들의 시선은 전혀 신경 쓰지 않고 자기만의 독창적인 리듬으로 세상을 즐기는 자유로운 영혼입니다. 장난꾸러기처럼 보이지만 실전에서는 압도적인 센스와 뛰어난 실력을 보여주는 숨겨진 천재형입니다.",
    situations: [
      "하고 싶은 일이 생기면 머뭇거림 없이 즉시 실행에 옮겨요.",
      "말보다는 독특한 리액션이나 행동으로 존재감을 뿜어내요.",
      "위기 상황에서도 당황하지 않고 타고난 감각으로 문제를 척척 헤쳐 나가요."
    ],
    best: "치이카와 & 하치와레 (내 기행을 있는 그대로 받아주는 소중한 친구들)",
    worst: "노동 갑옷 씨 🛡️ (정해진 틀과 잔소리를 딱 질색해요)"
  },
  momonga: {
    name: "모몽가",
    sub: "사랑받고 싶은 귀여운 욕망의 화신",
    img: "images/momonga.png",
    bg: "#F5F3FF",
    quote: "날 당장 귀여워해라-ッ! 어서 칭찬해라!!",
    trait: "주변의 관심과 칭찬을 한몸에 받고 싶어 하는 당돌하고 솔직한 캐릭터입니다. 뻔뻔해 보일 때도 있지만, 그 솔직함과 숨길 수 없는 앙탈이 거부할 수 없는 치명적인 매력으로 다가옵니다.",
    situations: [
      "내가 노력한 일은 세상 사람들 모두가 알아주고 칭찬해 줘야 해요.",
      "맛있는 음식이나 예쁜 물건은 절대 양보할 수 없어요!",
      "나를 진심으로 받아주는 헌책방 친구에게는 은근히 마음을 열어요."
    ],
    best: "후루혼야 (카니) 🦀 (내 모든 투정을 온화하게 받아주는 천사 친구)",
    worst: "랏코 🗡️ (나의 애교가 전혀 통하지 않는 진지함에 머쓱해져요)"
  },
  kurimanju: {
    name: "쿠리만쥬",
    sub: "한 잔의 여유를 아는 인생의 미식가",
    img: "images/kurimanju.png",
    bg: "#FFF6ED",
    quote: "꿀꺽... 꿀꺽... 하-앗...! 크으으-! 🍶",
    trait: "조용하고 과묵하지만 삶의 깊은 맛과 낭만을 제대로 아는 멋진 어른입니다. 혼자만의 시간을 소중히 여기며, 겉으로는 무뚝뚝해 보여도 도움이 필요한 이에게 슬그머니 간식을 건네는 따뜻한 츤데레입니다.",
    situations: [
      "힘든 하루 끝에 맛있는 음식과 음료 한 잔이면 모든 피로가 싹 풀려요.",
      "복잡한 말싸움보다는 묵묵한 행동과 미식으로 감정을 표현해요.",
      "내가 아끼는 맛집이나 레시피를 조용히 전수해 줄 때 뿌듯함을 느껴요."
    ],
    best: "시사 🍜 (열심히 일하는 성실함이 기특해서 안주를 챙겨주고 싶어요)",
    worst: "우사기 🐰 (내 평화롭고 조용한 혼술 시간을 방해하는 괴성 폭격기)"
  },
  rakko: {
    name: "랏코",
    sub: "반전 매력을 품은 든든한 멘토 & 최강자",
    img: "images/rakko.png",
    bg: "#FFF9EB",
    quote: "강해졌구나... 나의 차에 타라. 달콤한 디저트를 먹으러 가자.",
    trait: "철저한 자기관리와 강력한 실력을 겸비한 모두의 우상이자 믿음직한 리더입니다. 공적인 자리에서는 카리스마를 내뿜지만, 사적인 순간에는 달콤한 디저트에 푹 빠지는 사랑스러운 반전 매력을 품고 있습니다.",
    situations: [
      "어려움에 처한 후배나 친구를 보면 그냥 지나치지 못하고 이끌어줘요.",
      "힘든 훈련이나 프로젝트를 성공시킨 뒤 나에게 주는 달콤한 보상이 최고예요.",
      "책임감이 강해 맡은 일은 빈틈없이 완벽하게 해내야 직성이 풀려요."
    ],
    best: "치이카와 & 하치와레 (노력하며 성장하는 모습이 너무 대견해요)",
    worst: "모몽가 🐿️ (이유 없는 앙탈과 생떼를 보면 엄하게 훈계하고 싶어져요)"
  },
  shisa: {
    name: "시사",
    sub: "성실함 100%! 활기찬 열정의 알바왕",
    img: "images/shisa.png",
    bg: "#FFF4EB",
    quote: "우레시사-! (기뻐시사!) 오늘도 힘차게 화이팅!",
    trait: "밝은 미소와 긍정적인 에너지로 주변을 환하게 밝히는 열정파입니다. 목표가 생기면 밤낮을 가리지 않고 꾸준히 노력해 결국 자격증을 따내고 마는 성실함의 교과서 같은 인물입니다.",
    situations: [
      "인사와 예절은 기본! 언제 어디서나 밝고 씩씩하게 인사해요.",
      "새로운 기술이나 자격증을 취득할 때 가장 큰 보람을 느껴요.",
      "내가 만든 음식이나 서비스를 받고 손님이 웃을 때 기뻐시사(우레시사)!"
    ],
    best: "라멘 갑옷 씨 🛡️ (존경하는 스승님 밑에서 일하는 매 순간이 행복해요)",
    worst: "우사기 🐰 (가게 룰을 안 지키고 제멋대로 날뛸까 봐 조마조마해요)"
  },
  furuhonya: {
    name: "후루혼야 (카니)",
    sub: "따스한 공감과 배려를 지닌 힐러",
    img: "images/furuhonya.png",
    bg: "#FFF0F1",
    quote: "네가 원한다면... 언제든 곁에서 이야기를 들어줄게.",
    trait: "조용하고 내성적이지만 누구보다 깊은 이해심과 따뜻한 포용력을 지닌 천사 같은 인물입니다. 남들이 버거워하는 친구의 성격까지도 넓은 마음으로 감싸 안아주며 진정한 안식처가 되어줍니다.",
    situations: [
      "조용한 공간에서 책을 읽거나 잔잔한 음악을 들으며 사색하는 걸 좋아해요.",
      "상대방이 무슨 말을 하든 중간에 끊지 않고 끝까지 귀 기울여줘요.",
      "친구를 위해서라면 조금 번거로운 부탁도 기꺼이 웃으며 들어줘요."
    ],
    best: "모몽가 🐿️ (투정을 부려도 밉지 않고 너무 사랑스러운 단짝)",
    worst: "치이카부 🧇 (예측할 수 없는 거대 반전에 심장이 쿵 내려앉을 수 있어요)"
  }
};

// 퀴즈 진행 상태 변수
let currentQuestionIndex = 0;
let userScores = {};
let lastCalculatedCharId = "chiikawa";

const startQuizBtn = document.getElementById("startQuizBtn");
const quizIntro = document.getElementById("quizIntro");
const quizQuestionsBox = document.getElementById("quizQuestions");
const quizLoading = document.getElementById("quizLoading");
const quizResult = document.getElementById("quizResult");

const quizProgressFill = document.getElementById("quizProgressFill");
const quizProgressText = document.getElementById("quizProgressText");
const questionEmoji = document.getElementById("questionEmoji");
const questionText = document.getElementById("questionText");
const answersList = document.getElementById("answersList");

const resultBanner = document.getElementById("resultBanner");
const resultImg = document.getElementById("resultImg");
const resultName = document.getElementById("resultName");
const resultSub = document.getElementById("resultSub");
const resultQuote = document.getElementById("resultQuote");
const resultTraitDesc = document.getElementById("resultTraitDesc");
const resultSituations = document.getElementById("resultSituations");
const resultBestMatch = document.getElementById("resultBestMatch");
const resultWorstMatch = document.getElementById("resultWorstMatch");
const restartQuizBtn = document.getElementById("restartQuizBtn");
const viewInBookBtn = document.getElementById("viewInBookBtn");

// 퀴즈 시작
startQuizBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  userScores = {
    chiikawa: 0,
    hachiware: 0,
    usagi: 0,
    momonga: 0,
    kurimanju: 0,
    rakko: 0,
    shisa: 0,
    furuhonya: 0
  };

  quizIntro.style.display = "none";
  quizResult.style.display = "none";
  quizQuestionsBox.style.display = "block";
  renderQuestion();
});

// 질문 렌더링
function renderQuestion() {
  const q = quizQuestions[currentQuestionIndex];
  const total = quizQuestions.length;
  const progressPercent = ((currentQuestionIndex + 1) / total) * 100;

  quizProgressFill.style.width = `${progressPercent}%`;
  quizProgressText.textContent = `Q. ${currentQuestionIndex + 1} / ${total}`;

  questionEmoji.textContent = q.emoji;
  questionText.textContent = q.question;

  answersList.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  q.answers.forEach((ans, idx) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.innerHTML = `
      <span class="answer-letter">${letters[idx]}</span>
      <span class="answer-label">${ans.text}</span>
    `;

    btn.addEventListener("click", () => handleAnswer(ans.scores));
    answersList.appendChild(btn);
  });
}

// 답변 선택 핸들러
function handleAnswer(scores) {
  for (const [char, point] of Object.entries(scores)) {
    if (userScores[char] !== undefined) {
      userScores[char] += point;
    }
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    renderQuestion();
  } else {
    finishQuiz();
  }
}

// 퀴즈 결과 산출
function finishQuiz() {
  quizQuestionsBox.style.display = "none";
  quizLoading.style.display = "block";

  // 로딩 연출 (800ms)
  setTimeout(() => {
    quizLoading.style.display = "none";
    quizResult.style.display = "block";

    // 점수가 가장 높은 캐릭터 찾기
    let topChar = "chiikawa";
    let maxScore = -1;
    for (const [char, score] of Object.entries(userScores)) {
      if (score > maxScore) {
        maxScore = score;
        topChar = char;
      }
    }

    lastCalculatedCharId = topChar;
    displayResult(topChar);
  }, 850);
}

// 결과 화면 표시
function displayResult(charId) {
  const data = quizResultsData[charId] || quizResultsData.chiikawa;

  resultImg.src = data.img;
  resultImg.alt = data.name;
  resultBanner.style.backgroundColor = data.bg;
  resultName.textContent = data.name;
  resultSub.textContent = data.sub;
  resultQuote.textContent = data.quote;
  resultTraitDesc.textContent = data.trait;

  resultSituations.innerHTML = data.situations
    .map((s) => `<li>${s}</li>`)
    .join("");

  resultBestMatch.textContent = data.best;
  resultWorstMatch.textContent = data.worst;

  // 결과 음성 대사 외치기 (Web Speech API)
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`당신은 ${data.name}! ${data.quote}`);
    utterance.lang = "ko-KR";
    utterance.pitch = 1.2;
    window.speechSynthesis.speak(utterance);
  }
}

// 다시 테스트하기 버튼
restartQuizBtn.addEventListener("click", () => {
  quizResult.style.display = "none";
  quizIntro.style.display = "block";
});

// 도감 보러가기 버튼
viewInBookBtn.addEventListener("click", () => {
  switchTab("book");
  // 해당 캐릭터 모달 자동 오픈
  const targetChar = characters.find((c) => c.id === lastCalculatedCharId);
  if (targetChar) {
    setTimeout(() => {
      openModal(targetChar);
    }, 200);
  }
});

// 초기 렌더링
renderCards();
