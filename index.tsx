import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Nfc } from "lucide-react";
import heroImg from "@/assets/hero-lams.jpg";
import tapImg from "@/assets/nfc-tap.jpg";
import standUnboxing from "@/assets/review-stand-unboxing.jpg.asset.json";
import wordmark from "@/assets/lams-wordmark-silver.png.asset.json";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TechFeatures } from "@/components/site/TechFeatures";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PRODUCTS } from "@/lib/products";
import { whatsappLink } from "@/lib/brand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "لمس LAMS — منتجات NFC فاخرة | Luxury Meets Tech" },
      {
        name: "description",
        content: "لمسة واحدة تكفي لتنتقل المعلومة. كروت أعمال ذكية، ميداليات جلد وإيبوكسي، وستاندات تقييم جوجل بتقنية NFC.",
      },
      { property: "og:title", content: "لمس LAMS — منتجات NFC فاخرة" },
      { property: "og:description", content: "لمسة واحدة تكفي لتنتقل المعلومة. منتجات ذكية بتقنية NFC بتصميم فاخر." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const MARQUEE = ["LUXURY MEETS TECH", "NFC", "لمسة واحدة", "SMART CARDS", "GOOGLE REVIEWS", "لمس"];

const STEPS = [
  { n: "01", title: "اختر منتجك", text: "كارت، ميدالية، أو ستاند يناسب أسلوبك وعملك." },
  { n: "02", title: "خصّصه باسمك", text: "نطبع اسمك بالفضي أو الذهبي ونبرمج الشريحة ببياناتك." },
  { n: "03", title: "المس وشارك", text: "لمسة واحدة على أي هاتف حديث وتنتقل المعلومة فورًا." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-20 pt-32 md:items-center md:pb-0">
        <img
          src={heroImg}
          alt="كارت معدني أسود وستاند أكريليك من لمس على رخام أسود"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full -scale-x-100 object-cover object-[30%_center] md:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-fade-bottom" />

        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <div className="animate-fade-up flex items-center gap-4">
              <img src={wordmark.url} alt="لمس" width={800} height={381} className="h-14 w-auto sm:h-16" />
              <span className="h-10 w-px bg-hairline" />
              <span className="font-latin text-xs font-light tracking-brand text-silver">LAMS</span>
            </div>

            <h1
              className="animate-fade-up mt-10 text-4xl font-light leading-[1.25] text-pearl sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "120ms" }}
            >
              لمسة واحدة تكفي
              <br />
              <span className="text-silver font-normal">لتنتقل المعلومة</span>
            </h1>

            <p
              className="animate-fade-up mt-7 max-w-lg text-lg leading-relaxed text-silver/80"
              style={{ animationDelay: "240ms" }}
            >
              <span className="font-latin text-sm uppercase tracking-[0.3em] text-gold">Luxury Meets Tech</span>
              <br />
              منتجات ذكية بتقنية NFC بتصميم فاخر
            </p>

            <div className="animate-fade-up mt-10 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
              <Button asChild variant="luxe" size="xl">
                <Link to="/products">
                  اكتشف المنتجات <ArrowLeft />
                </Link>
              </Button>
              <Button asChild variant="hairline" size="xl">
                <a href={whatsappLink("مرحبًا لمس، أود الطلب")} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-4" /> اطلب الآن
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 start-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex rtl:translate-x-1/2">
          <span className="relative grid size-10 place-items-center">
            <span className="animate-pulse-ring absolute inset-0 rounded-full border border-silver/40" />
            <Nfc className="size-4 text-silver" strokeWidth={1.4} />
          </span>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-hairline py-5" dir="ltr">
        <div className="animate-marquee flex w-max gap-14 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={i} className="flex items-center gap-14 font-latin text-xs font-light tracking-brand text-silver/60">
              {t} <span className="size-1 rounded-full bg-gold" />
            </span>
          ))}
        </div>
      </div>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-5 py-28 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The Collection"
            title="مجموعة لمس"
            subtitle="كل منتج يحمل شريحة NFC أصلية، ومصنوع من خامات تليق باسمك."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 120}>
              <ProductCard product={p} />
            </Reveal>
          ))}
          <Reveal delay={240}>
            <div className="glass flex h-full min-h-80 flex-col justify-between rounded-3xl p-8">
              <div>
                <p className="font-latin text-[0.65rem] uppercase tracking-[0.3em] text-gold">Bulk & Corporate</p>
                <h3 className="mt-4 text-2xl font-light text-pearl">طلبات الشركات والكميات</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  هوية موحّدة لفريقك أو فروعك؟ نجهّز لك عرضًا خاصًا وتصميمًا مخصصًا.
                </p>
              </div>
              <Button asChild variant="whatsapp" size="pill" className="mt-8 self-start">
                <a href={whatsappLink("مرحبًا لمس، أود الاستفسار عن طلب كميات للشركات")} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-4" /> تواصل معنا
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Technology */}
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-hairline">
              <img src={tapImg} alt="هاتف يلمس كارت NFC" width={1280} height={960} loading="lazy" className="w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <SectionHeading
              align="start"
              eyebrow="NFC Technology"
              title="تقنية خفية، أثر واضح"
              subtitle="شريحة NFC صغيرة داخل كل منتج تتواصل لاسلكيًا مع الهاتف بمجرد اللمس: تفتح ملفك الشخصي، حساباتك، أو صفحة تقييمك على جوجل."
            />
            <Button asChild variant="hairline" size="pill" className="mt-8">
              <Link to="/technology">
                كيف تعمل التقنية <ArrowLeft />
              </Link>
            </Button>
          </Reveal>
        </div>
        <div className="mt-20">
          <TechFeatures />
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-5 py-28 md:px-8">
        <Reveal>
          <SectionHeading eyebrow="How it works" title="ثلاث خطوات فقط" />
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="border-t border-hairline pt-8">
                <p className="font-display text-5xl font-medium text-silver">{s.n}</p>
                <h3 className="mt-6 text-xl font-medium text-pearl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Business spotlight */}
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-hairline">
            <img
              src={standUnboxing.url}
              alt="علبة ستاند تقييم جوجل من لمس"
              width={1080}
              height={288}
              loading="lazy"
              className="absolute inset-0 -z-20 h-full w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 -z-10 bg-hero-overlay" />
            <div className="max-w-xl px-8 py-16 sm:px-14 sm:py-24">
              <p className="font-latin text-[0.65rem] uppercase tracking-[0.3em] text-gold">For Restaurants · Cafés · Hotels</p>
              <h2 className="mt-5 text-3xl font-light leading-snug text-pearl sm:text-4xl">
                تقييمات جوجل أكثر،
                <br />
                بلمسة من عميلك
              </h2>
              <p className="mt-5 leading-relaxed text-silver/80">
                ستاند أكريليك فاخر على طاولتك أو في الاستقبال يحوّل رضا عملائك إلى تقييمات حقيقية.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button asChild variant="luxe" size="pill">
                  <Link to="/products/$slug" params={{ slug: "google-review-stand" }}>
                    اطلب الستاند
                  </Link>
                </Button>
                <p className="font-price text-xl font-semibold text-gold">
                  199 <span className="font-sans text-sm font-normal text-gold-soft">دينار</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
