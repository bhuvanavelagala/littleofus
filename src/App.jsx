import { useRef, useState } from "react";
import "./App.css";


import memory1 from "./assets/memory1.jpg";
import memory2 from "./assets/memory2.jpg";
import memory3 from "./assets/memory3.jpg";
import memory4 from "./assets/memory4.jpg";
import memory5 from "./assets/memory5.jpg";
import memory6 from "./assets/memory6.jpg";
import memory7 from "./assets/memory7.jpg";
import memory8 from "./assets/memory8.jpg";

import m1 from "./assets/m1.jpg";
import m2 from "./assets/m2.jpg";
import m3 from "./assets/m3.jpg";
import m4 from "./assets/m4.jpg";
import m5 from "./assets/m5.jpg";
import m6 from "./assets/m6.jpg";
import m8 from "./assets/m8.jpg";
import m9 from "./assets/m9.jpg";

import m7 from "./assets/m7.jpg";

import song from "./assets/song.mp4";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showDelivery, setShowDelivery] = useState(false);
  const [showCaution, setShowCaution] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [openLetter, setOpenLetter] = useState(false);
  const [showMemories, setShowMemories] = useState(false);
  const [showTenThings, setShowTenThings] = useState(false);
  const [showCollage, setShowCollage] = useState(false);
  const [showLoveCard, setShowLoveCard] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const audioRef = useRef(null);

  return (

    <div className="birthday-page">
      
    <audio
      ref={audioRef}
      src={song}
      loop
      preload="auto"
    />

    {/* your existing pages */}
{showIntro && (
  <section className="intro-screen">

    <div className="intro-content">

      <div className="intro-tape"></div>

      <div className="intro-small-text">
        ♡ • MADE WITH LOVE • JUST FOR YOU • ♡
      </div>

      <h1 className="intro-title">
        Half a year
        <br />
        a miillion little moments
      </h1>

      <p className="intro-subtitle">
        and a love that feels like home <span>♥</span>
      </p>

      <div className="intro-divider">
        ♡ ───── ✦ ───── ♡
      </div>

      <button
        className="intro-next"
        onClick={() => {
  audioRef.current?.play();
  setShowIntro(false);
  setShowDelivery(true);
}}
      >
        open my little surprise
      </button>

    </div>

  </section>
)}

{/* =================================
    2. SPECIAL DELIVERY
================================= */}

{showDelivery && (
  <section className="delivery-screen">

    {/* OUTSIDE DECORATIONS */}

    <div className="delivery-deco delivery-heart-one">♡</div>
    <div className="delivery-deco delivery-heart-two">♡</div>
    <div className="delivery-deco delivery-heart-three">♡</div>

    <div className="delivery-deco delivery-star-one">✦</div>
    <div className="delivery-deco delivery-star-two">✧</div>

    <div className="delivery-bow delivery-bow-left">
      ୨୧
    </div>

    <div className="delivery-bow delivery-bow-right">
      ୨୧
    </div>


    {/* ================================
        CENTER SCRAPBOOK CARD
    ================================= */}

    <div className="delivery-content">

      {/* tape */}

      <div className="delivery-card-tape"></div>


      {/* little label */}

      <div className="delivery-card-small">
        ♡ SPECIAL DELIVERY ♡
      </div>


      {/* envelope */}

      <div className="delivery-card-icon">

        <div className="mini-envelope">

          <div className="envelope-flap"></div>

          <div className="envelope-heart">
            ♥
          </div>

        </div>

      </div>


      {/* main text */}

      <h1>
        MADE WITH
        <br />
        LOVE ♡
      </h1>


      <p className="delivery-card-text">
        a little something
        <br />
        just for you...
      </p>


      {/* next */}

      <button
        onClick={() => {
          setShowDelivery(false);
          setShowCaution(true);
        }}
      >
        next ♡
      </button>

    </div>

  </section>
)}


{showCaution && (
  <section className="caution-screen">

    {/* BACKGROUND DECORATIONS */}

    <div className="caution-heart heart-left">♡</div>
    <div className="caution-heart heart-left-small">♡</div>

    <div className="caution-heart heart-right">♡</div>
    <div className="caution-heart heart-right-small">♡</div>

    <div className="caution-star star-left">✦</div>
    <div className="caution-star star-right">✧</div>

    <div className="caution-doodle doodle-left">〰</div>
    <div className="caution-doodle doodle-right">〰</div>


    {/* MAIN TRIANGLE */}

    <div className="caution-sign">

      <div className="caution-sign-inner">

        <div className="caution-title">
          CAUTION
        </div>

        <div className="falling-person">

          <div className="person-head"></div>

          <div className="person-body"></div>

          <div className="person-arm"></div>

          <div className="person-leg leg-one"></div>

          <div className="person-leg leg-two"></div>

        </div>

        <div className="caution-love-text">
          YOU MIGHT
          <br />
          FALL IN LOVE.
        </div>

      </div>

    </div>


    {/* NEXT */}

    <button
      className="caution-next"
      onClick={() => {
        setShowCaution(false);
        setShowSurprise(true);
      }}
    >
      next &gt;&gt;
    </button>

  </section>
)}
      {/* =================================
          4. DECORATIVE WEBS
      ================================= */}
{showSurprise && !showMemories && (
  <>
    <div className="web web-top-left">
      🕸️
    </div>

    <div className="web web-bottom-right">
      🕸️
    </div>
  </>
)}


      {/* =================================
          5. ENVELOPE
      ================================= */}

     

{showSurprise && !openLetter && !showMemories && (
  <section className="envelope-screen">

    {/* BACKGROUND STARS */}

    <div className="envelope-star star-1">★</div>
    <div className="envelope-star star-2">★</div>
    <div className="envelope-star star-3">★</div>
    <div className="envelope-star star-4">★</div>
    <div className="envelope-star star-5">★</div>

    <div className="envelope-heart heart-1">♡</div>
    <div className="envelope-heart heart-2">♡</div>


    {/* ENVELOPE */}

    <div
      className="envelope-wrapper"
      onClick={() => setOpenLetter(true)}
    >

      <div className="envelope">

        <div className="envelope-flap"></div>

        <div className="envelope-letter">
          <span>♥</span>
          <p>
            hey, i have a
            <br />
            surprise for
            <br />
            you
          </p>
        </div>

        <div className="envelope-body"></div>

      </div>

    </div>


    {/* OPEN NOW */}

    <button
      className="envelope-open"
      onClick={() => setOpenLetter(true)}
    >
      open now
    </button>

  </section>
)}
      {/* =================================
          6. LOVE LETTER
      ================================= */}

{openLetter && !showMemories && (
  <section className="letter-screen">

    <div className="love-letter">

      <div className="letter-tape"></div>

      {/* REALISTIC LIPSTICK PRINTS */}

      <div className="kiss-print kiss-1">
        <div className="lip-top"></div>
        <div className="lip-bottom"></div>
        <div className="lip-gap"></div>
      </div>

      <div className="kiss-print kiss-2">
        <div className="lip-top"></div>
        <div className="lip-bottom"></div>
        <div className="lip-gap"></div>
      </div>

      <div className="kiss-print kiss-3">
        <div className="lip-top"></div>
        <div className="lip-bottom"></div>
        <div className="lip-gap"></div>
      </div>

      <div className="kiss-print kiss-4">
        <div className="lip-top"></div>
        <div className="lip-bottom"></div>
        <div className="lip-gap"></div>
      </div>

      <div className="letter-small-title">
        A LITTLE LETTER FOR YOU ♡
      </div>

      <h1 className="letter-title">
        To my favourite person,
      </h1>

      <div className="letter-content">

        <p>
          Dearesttt Maddihh ♡
        </p>

        <p>
          Happiiiee half a year anniversary chittiiiii 🤍🤎
        </p>

        <p>
          Six months of us, and still a thousand feelings I can't put into
          words. Looking back, all I see is our laughter, love, care, and all
          our tiny little moments. I've fallen so much more in love with you
          every single day, can't even help it btw🤭
        </p>

        <p>
          184 days might seem like a little, but to us, they hold so much. I
          know neither of us is perfect, and we don't have everything figured
          out, but one thing I know for sure is that my love for you is real,
          and I never wanna take us for granted.
        </p>

        <p>
          I don't know what the future holds for us, but I know I wanna keep
          loving you, growing with you, and making this love something we both
          feel safe and happy in. Ik we've had our fair share of arguments,
          but I'm really happy that we could sit down, talk things through,
          and understand each other better. And honestly, that's something I
          cherish about us.
        </p>

        <p>
          Sometimes I wish you could see yourself through my eyes, just so
          you'd understand how incredibly special you are to me. If I could
          go back to the beginning, I'd still choose you, and I'd fall for
          you all over again, in every little way. I lovee youu moreeeee than
          you can imagine bangaram. Might not be perfect, but it's ours, and
          that's what makes it so special😭🧿🤍
        </p>

        <p className="letter-ending">
          Happyy 6 months to us bangarammm ♡
        </p>

        <p>
          with all the love,<br />
          bhunu ♡
        </p>

      </div>

      <div className="letter-bottom-doodle">
        ─── ♡ ───
      </div>

    </div>

    <button
      className="letter-next"
      onClick={() => {
        setOpenLetter(false);
        setShowSurprise(false);
        setShowMemories(true);
      }}
    >
      turn the page →
    </button>

  </section>
)}

       {/* =================================
          7. OUR MEMORIES
      ================================= */}


{showMemories && !showTenThings && (
  <section className="memories-screen">

    {/* BACKGROUND STARS */}

    <div className="memory-star ms-1">★</div>
    <div className="memory-star ms-2">✦</div>
    <div className="memory-star ms-3">✧</div>
    <div className="memory-star ms-4">★</div>
    <div className="memory-star ms-5">✦</div>


    {/* LEFT PHOTO STRIP */}

    <div className="memory-photo photo-1">
      <img src={memory1} alt="Our memory" />
    </div>

    <div className="memory-photo photo-2">
      <img src={memory2} alt="Our memory" />
    </div>


    {/* RIGHT PHOTO STRIP */}

    <div className="memory-photo photo-3">
      <img src={memory3} alt="Our memory" />
    </div>

    <div className="memory-photo photo-4">
      <img src={memory4} alt="Our memory" />
    </div>

<div className="memory-photo photo-5">
  <img src={memory5} alt="Our memory" />
</div>

<div className="memory-photo photo-6">
  <img src={memory6} alt="Our memory" />
</div>

<div className="memory-photo photo-7">
  <img src={memory7} alt="Our memory" />
</div>

<div className="memory-photo photo-8">
  <img src={memory8} alt="Our memory" />
</div>
    {/* CENTER PAPER */}

    <div className="memory-center-card">

      <div className="memory-tape"></div>

      <div className="memory-small-heading">
        A LITTLE PIECE OF US ♡
      </div>

      <h1>
        happy half year anniversary,
        <br />
        Darling ♡
      </h1>

      <div className="memory-divider">
        ─── ♥ ───
      </div>

      <p>
        Manifesting a
        <br />
        lifetime of memories
      </p>

      <div className="memory-bottom">
        ♡ always you ♡
      </div>

    </div>


    {/* NEXT */}

    <button
      className="memory-next"
      onClick={() => {
        setShowMemories(false);
        setShowTenThings(true);
      }}
    >
      next &gt;&gt;
    </button>

  </section>
)}

{/* =================================
    8. 10 THINGS I LOVE ABOUT YOU
================================= */}

{showTenThings && !showCollage && (
  <section className="ten-things-page">

    {/* LEFT SIDE — BIG TITLE */}

    <div className="ten-things-left">

      <h1 className="ten-things-main-title">
        <span>10 THINGS</span>
        <span>I LOVE</span>
        <span>ABOUT</span>
        <span>YOU</span>
      </h1>

      <div className="ten-title-heart">
        ♡
      </div>

      <div className="ten-title-sparkle sparkle-a">
        ✦
      </div>

      <div className="ten-title-sparkle sparkle-b">
        ✧
      </div>

      <div className="ten-side-note">
        my favorite
        <br />
        person ♡
      </div>

      <div className="ten-side-note lucky-note">
        so lucky
        <br />
        to have you
        <br />
        ♡
      </div>

    </div>


    {/* RIGHT SIDE — PAPER */}

    <div className="ten-things-paper">

      <div className="paper-tape"></div>

      <div className="airmail-border"></div>

      <div className="ten-things-list">

        <div className="ten-thing">
          <span>1.</span>
          <p>
            I love the way you make even
            <br />
            ordinary days feel special.
          </p>
        </div>

        <div className="ten-thing">
          <span>2.</span>
          <p>
            I love your smile because it
            <br />
            instantly brightens my day.
          </p>
        </div>

        <div className="ten-thing">
          <span>3.</span>
          <p>
            I love the way you care for
            <br />
            everyone around you.
          </p>
        </div>

        <div className="ten-thing">
          <span>4.</span>
          <p>
            I love how safe, comfortable,
            <br />
            and loved I feel with you.
          </p>
        </div>

        <div className="ten-thing">
          <span>5.</span>
          <p>
            I love your silly side that makes
            <br />
            everything more fun.
          </p>
        </div>

        <div className="ten-thing">
          <span>6.</span>
          <p>
            I love the little things you do
            <br />
            without even realizing.
          </p>
        </div>

        <div className="ten-thing">
          <span>7.</span>
          <p>
            I love the way you always
            <br />
            listen to me.
          </p>
        </div>

        <div className="ten-thing">
          <span>8.</span>
          <p>
            I love the memories we keep
            <br />
            creating together.
          </p>
        </div>

        <div className="ten-thing">
          <span>9.</span>
          <p>
            I love the you for the person you are 
            <br />
            and for the person you want to be.
          </p>
        </div>

        <div className="ten-thing">
          <span>10.</span>
          <p>
            And simply because you're YOU.
            <span className="little-heart">♡</span>
          </p>
        </div>

      </div>

      {/* LITTLE NOTE ON PAPER */}

      <div className="paper-heart">
        ♡
      </div>

    </div>


    {/* RIGHT OUTSIDE NOTE */}

    <div className="ten-right-note">
      you make life
      <br />
      so much brighter
      <br />
      ♡
    </div>


    {/* DECORATIONS */}

    <div className="ten-page-heart heart-one">
      ♡
    </div>

    <div className="ten-page-heart heart-two">
      ♡
    </div>

    <div className="ten-page-sparkle star-one">
      ✦
    </div>

    <div className="ten-page-sparkle star-two">
      ✧
    </div>


    {/* NEXT BUTTON */}

    <button
      className="ten-things-next"
      onClick={() => {
        setShowTenThings(false);
        setShowCollage(true);
      }}
    >
      one more little surprise... ♡
    </button>

  </section>
)}

     {/* =================================
    9. BIG SCRAPBOOK COLLAGE
================================= */}

{showCollage && !showLoveCard && (
  <section className="scrapbook-collage-page">

    {/* TOP LITTLE LABEL */}
    <div className="collage-label">
      ♡ little pieces of us ♡
    </div>

{/* LEFT PHOTO STRIP */}
<div className="photo-strip strip-left">

  <div className="strip-tape"></div>

  <div className="strip-photo">
    <img src={m1} alt="memory 1" />
  </div>

  <div className="strip-photo">
    <img src={m2} alt="memory 2" />
  </div>

  <div className="strip-photo">
    <img src={m3} alt="memory 3" />
  </div>

  <div className="strip-photo">
    <img src={m4} alt="memory 4" />
  </div>

  <div className="strip-caption">
    this moment ♡
  </div>

</div>


{/* RIGHT PHOTO STRIP */}
<div className="photo-strip strip-right">

  <div className="strip-tape"></div>

  <div className="strip-photo">
    <img src={m5} alt="memory 5" />
  </div>

  <div className="strip-photo">
    <img src={m6} alt="memory 6" />
  </div>

  <div className="strip-photo">
    <img src={m8} alt="memory 8" />
  </div>

  <div className="strip-photo">
    <img src={m9} alt="memory 9" />
  </div>

  <div className="strip-caption">
    you make everything better ♡
  </div>

</div>
    
    {/* CENTER SCRAPBOOK PAPER */}
    <div className="collage-center-paper">

      <div className="center-tape"></div>

      <div className="center-paper-inner">

        <span className="center-small-title">
          DEAR MY FAVORITE PERSON,
        </span>

        <h1>
          Here's to
          <br />
          <span>US ♡</span>
        </h1>

        <p>
          Thank you for becoming
          <br />
          one of my favorite parts
          <br />
          of life.
        </p>

        <p className="center-message">
          You make ordinary days
          <br />
          feel a little more special,
          <br />
          a little more fun,
          <br />
          and a lot more beautiful.
        </p>

        <div className="center-sign">
          — bhunu ♡
        </div>

      </div>

    </div>


    {/* SMALL NOTE — TOP LEFT */}
    <div className="collage-note note-one">
      ♡
      <br />
      life is prettier
      <br />
      with you in it
    </div>


    {/* SMALL NOTE — TOP RIGHT */}
    <div className="collage-note note-two">
      my
      <br />
      favorite
      <br />
      person ♡
    </div>


    {/* SMALL NOTE — BOTTOM LEFT */}
    <div className="collage-note note-three">
      so lucky
      <br />
      to have you
      <br />
      ♡
    </div>


    {/* SMALL NOTE — BOTTOM RIGHT */}
    <div className="collage-note note-four">
      you make
      <br />
      everything
      <br />
      better ♡
    </div>


    {/* HEARTS */}
    <div className="collage-heart collage-heart-one">
      ♡
    </div>

    <div className="collage-heart collage-heart-two">
      ♡
    </div>

    <div className="collage-heart collage-heart-three">
      ♡
    </div>


    {/* SPARKLES */}
    <div className="collage-sparkle sparkle-one">
      ✦
    </div>

    <div className="collage-sparkle sparkle-two">
      ✧
    </div>

    <div className="collage-sparkle sparkle-three">
      ✦
    </div>


    {/* CUTE STICKERS */}
    <div className="collage-sticker teddy">
      🧸
    </div>

    <div className="collage-sticker flower">
      🌼
    </div>

    <div className="collage-sticker cherry">
      🍒
    </div>


    {/* SUBTLE WEB */}
    <div className="collage-web">
      🕸️
    </div>


    {/* BOTTOM BUTTON */}
    <button
      className="collage-next"
      onClick={() => {
        setShowCollage(false);
        setShowLoveCard(true);
      }}
    >
      one more little surprise... ♡
    </button>

  </section>
)}

{/* =================================
    10. LOVE YOU MORE — FINAL UNO CARD
================================= */}

{showLoveCard && !showFinal && (
  <section className="love-card-page">

    {/* =========================
        DOODLES
    ========================= */}

    <div className="uno-star uno-star-1">★</div>
    <div className="uno-star uno-star-2">★</div>
    <div className="uno-star uno-star-3">★</div>
    <div className="uno-star uno-star-4">★</div>

    <div className="uno-heart uno-heart-1">♡</div>
    <div className="uno-heart uno-heart-2">♡</div>
    <div className="uno-heart uno-heart-3">♡</div>

    <div className="uno-rays rays-left">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div className="uno-rays rays-right">
      <span></span>
      <span></span>
      <span></span>
    </div>


   {/* =========================
    CENTER LOVE CARD
========================= */}

<div className="uno-card">

  {/* TAPE */}

  <div className="uno-tape"></div>


  {/* CREAM BORDER */}

  <div className="uno-card-face">

    {/* RED CARD */}

    <div className="uno-red-area">

      {/* HAND-DRAWN CURVE */}

      <div className="uno-curve"></div>


      {/* LITTLE HEART */}

      <div className="card-mini-heart">
        ♡
      </div>


      {/* LOVE YOU */}

      <div className="uno-love-you">
        LOVE YOU
      </div>


      {/* MORE */}

      <div className="uno-more">
        MORE
        <span>♡</span>
      </div>


      {/* LITTLE WHITE DOODLE */}

      <div className="card-doodle">
        ✦
      </div>

    </div>

  </div>

</div>
    {/* =========================
        BELOW CARD
    ========================= */}

    <div className="uno-just-us">
      just us ♡
    </div>


    {/* =========================
        NEXT BUTTON
    ========================= */}

    <button
      className="uno-next"
      onClick={() => {
        setShowLoveCard(false);
        setShowFinal(true);
      }}
    >
      NEXT →
    </button>

  </section>
)}

{/* =================================
    11. FINAL — 184 DAYS TO US BANGARAM
================================= */}

{showFinal && (
  <section className="anniversary-final-page">

    {/* =========================
        TOP CORNER TEXT
    ========================= */}

    <div className="anniversary-top-left">
      184
      <br />
      days... ♡
    </div>

    <div className="anniversary-top-right">
      6 months
      <br />
      of us ♡
    </div>


    {/* =========================
        MAIN CENTER
    ========================= */}

    <div className="anniversary-center">

      {/* EXISTING m7 IMAGE */}

      <div className="anniversary-photo">
        <img
          src={m7}
          alt="our memory"
        />
      </div>


      {/* TEXT BOXES */}

      <div className="anniversary-message">

        <div className="anniversary-box anniversary-happy">
          HAPPYYY ♡
        </div>

        <div className="anniversary-box anniversary-days">
          184 DAYS
        </div>

        <div className="anniversary-box anniversary-bangaram">
          TO US BANGARAM ♡
        </div>

      </div>

    </div>


    {/* =========================
        CLEAN BOTTOM NOTE
    ========================= */}

    <div className="anniversary-middle-note">
      here's to many more ♡
    </div>


    {/* =========================
        NEXT / AGAIN BUTTON
    ========================= */}

    <button
      className="anniversary-finish"
      onClick={() => {
        setShowFinal(false);
        setShowIntro(true);
      }}
    >
      AGAIN ♡
    </button>

  </section>
)}
 
</div>
);
}

export default App;