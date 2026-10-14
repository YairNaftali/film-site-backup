import { thumb, full } from '../img';

const profiles = [
  {
    id: 'chanie',
    name: 'Chanie Rosenfeld',
    location: 'Chabad Esra, Zürich, Switzerland',
    image: '/images/Zurich_ChanieRosenfeld.jpg',
    blurb:
      'I am the Rebbezin in Zurich’s orthodox movement, Chabad Esra. My role is multifaceted. I teach women’s courses on the Torah, holidays, the soul and the afterlife. I organize women\'s events and cook Shabbat meals at our Chabad Center. I run our Hebrew school and teach girls at a local Jewish day-school. My home is welcome to all guests, locals, and tourists. People with family members in nearby hospitals often come to our home. My husband and I see our role in providing, support and guidance. To those outside of our circle, we convey the beauty of Judaism.'
  },
  {
    id: 'sylvia',
    name: 'Sylvia Dym',
    location: 'Jüdische Liberale Gemeinde Or Chadasch, Zürich, Switzerland',
    image: '/images/Sylvia_Dym.jpg',
    blurb:
      'I have been serving my community since 2008, the JLG Or Chadasch in Zurich. I teach Bar and Bat Mitzvah students, many of whom I have known since they were my pupils in preschool. I also teach older congregants, among others, to read from the Torah and Haftorah. I work alongside my husband in many ways.'
  },
  {
    id: 'michelle',
    name: 'Michelle Shitrit',
    location: 'Wife of Rosh Kehillah, Lucerne Switzerland',
    image: '/images/Lucerne_MichelleShitrit.jpg',
    blurb:
      'My husband is Rosh Kehilah, president of the Jewish congregation, in Lucerne. He and I work behind-the-scenes, helping run the Yeshiva, the men’s school, the cemetery and synagogue. I take care of the bookkeeping, the administration, I organize events and answer phone calls for the cemetery.'
  }
];

export function Rebbitzen() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="serif-font text-5xl mb-6">The Rebbitzen Project</h1>

          <p className="mb-8 text-white/80">
            Since so much of the museum's collection represents the duties of men and boys, yet so much of daily life is made possible by women, I took on the responsibility of showing a holistic picture of Jewish life. Exhibited in their permanent collection alongside objects pertaining to Rabbis, The Jewish Museum will showcase my portraits of Rebbitzins and the blurb created describing their personal role and contributions to their community.
          </p>

          {/* Profiles grid: 3 columns on large screens, stacked on small */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {profiles.map((p) => (
              <div key={p.id} className="flex flex-col gap-4">
                <div className="w-full">
                  <img
                    src={thumb(p.image)}
                    alt={p.name}
                    loading="lazy"
                    className="w-full aspect-[2/3] object-cover border border-white/10"
                  />
                </div>

                <div>
                  <h3 className="serif-font text-2xl">{p.name}</h3>
                  <div className="text-sm text-white/60 mb-3">{p.location}</div>
                  <p className="text-sm text-white/80">{p.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keep the longer profile texts below for readability (optional) */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-6xl text-white/80">
          <h2 className="serif-font text-3xl mb-4">Long-form profiles</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold">Sylvia Dym</h4>
              <p>
                I have been serving my community since 2008, the JLG Or Chadasch in Zurich. I teach Bar
                and Bat Mitzvah students, many of whom I have known since they were my pupils in
                preschool. I also teach older congregants, among others, to read from the Torah and
                Haftorah. I work alongside my husband in many ways: We teach a conversion course
                together once a month for those who want to become Jewish. We organize services
                together. I edit his weekly sermon, his drasha, and his articles, and I help him with
                time management. It took me many years to understand his way of thinking. I also have
                many unofficial tasks: Couples come to me to discuss intimacy issues, especially when
                they are going through difficult times. I am a first provider when the matters are
                delicate and the couples don’t want to approach the rabbi. Another sensitive role of
                mine is being leader of the female Tahara group. We wash and cleanse the deceased
                before burial. It took me a long time to gain acceptance and feel comfortable being
                myself: confident, opinionated, energetic. In the coming years, I’ll be working on my
                dissertation in religious studies.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Chanie Rosenfeld</h4>
              <p>
                I am the Rebbezin in Zurich’s orthodox movement, Chabad Esra. My role is
                multifaceted. I teach women’s courses on the Torah, holidays, the soul and the
                afterlife. I organize women's events and cook Shabbat meals at our Chabad Center. I
                run our Hebrew school and teach girls at a local Jewish day-school. My home is
                welcome to all guests, locals, and tourists. People with family members in nearby
                hospitals often come to our home. My husband and I see our role in providing, support
                and guidance. To those outside of our circle, we convey the beauty of Judaism.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Michelle Shitrit</h4>
              <p>
                My husband is Rosh Kehilah, president of the Jewish congregation, in Lucerne. He and
                I work behind-the-scenes, helping run the Yeshiva, the men’s school, the cemetery
                and synagogue. I take care of the bookkeeping, the administration, I organize events
                and answer phone calls for the cemetery. We raise funds for our community. We repair
                whatever needs fixing. We hire security guards and attend meetings with city
                officials about safety. On Shabbat, I host visitors and guests from around the world.
                My father and forefathers already fulfilled this duty; now, my family’s work is in my
                hands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rebbitzen;
