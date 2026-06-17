import React from "react";

const LearningTips = () => {
  return (
    <div>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold  text-primary">
            Learning Tips
          </h2>
          <p className="text-base-content/70 mt-3 text-sm md:text-base">
            Accelerate your tech and design career with proven frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ----------------------------------------------- */}
          {/* Left  side  */}
          {/* ----------------------------------------------- */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary border-b border-primary/20 pb-2 flex items-center gap-2">
              Study Techniques
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/*  1 */}
              <div className="card bg-base-200 shadow-md hover:-translate-y-1 transition-all duration-300 border border-base-300">
                <div className="card-body p-5">
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-bold text-lg text-base-content">
                        The Pomodoro Technique
                      </h4>
                      <p className="text-sm text-base-content/70 mt-1 leading-relaxed">
                        Study or code with full focus for 25 minutes, then take
                        a 5-minute break. Repeat this 4 times before taking a
                        longer 15 to 30-minute break to keep your mind fresh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*  2 */}
              <div className="card bg-base-200 shadow-md hover:-translate-y-1 transition-all duration-300 border border-base-300">
                <div className="card-body p-5">
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-bold text-lg text-base-content">
                        The Feynman Technique
                      </h4>
                      <p className="text-sm text-base-content/70 mt-1 leading-relaxed">
                        After learning a complex topic, try to explain it in
                        simple terms as if you were teaching it to a 10-year-old
                        child. This quickly reveals any gaps in your
                        understanding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*  3 */}
              <div className="card bg-base-200 shadow-md hover:-translate-y-1 transition-all duration-300 border border-base-300">
                <div className="card-body p-5">
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-bold text-lg text-base-content">
                        Active Recall & Practice
                      </h4>
                      <p className="text-sm text-base-content/70 mt-1 leading-relaxed">
                        Don t just watch tutorials passively. Open your code
                        editor and write the code yourself from scratch after
                        watching a short lesson.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------- */}
          {/* right side  */}
          {/* ----------------------------------------------- */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary border-b border-primary/20 pb-2 flex items-center gap-2">
              Time Management
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/*  1 */}
              <div className="card bg-base-200 shadow-md hover:-translate-y-1 transition-all duration-300 border border-base-300">
                <div className="card-body p-5">
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-bold text-lg text-base-content">
                        Time Blocking Method
                      </h4>
                      <p className="text-sm text-base-content/70 mt-1 leading-relaxed">
                        Divide your day into dedicated time blocks for specific
                        tasks. For example, assign 8 AM - 10 AM for learning new
                        topics and 4 PM - 6 PM for building projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*  2 */}
              <div className="card bg-base-200 shadow-md hover:-translate-y-1 transition-all duration-300 border border-base-300">
                <div className="card-body p-5">
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-bold text-lg text-base-content">
                        The 80/20 Rule
                      </h4>
                      <p className="text-sm text-base-content/70 mt-1 leading-relaxed">
                        Focus on the vital 20% of core concepts (like JavaScript
                        DOM operations or React Hooks) that will yield 80% of
                        your project results. Master the essentials first.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*  3 */}
              <div className="card bg-base-200 shadow-md hover:-translate-y-1 transition-all duration-300 border border-base-300">
                <div className="card-body p-5">
                  <div className="flex items-start gap-4">
                    <div>
                      <h4 className="font-bold text-lg text-base-content">
                        Eliminate Distractions
                      </h4>
                      <p className="text-sm text-base-content/70 mt-1 leading-relaxed">
                        Before starting your coding sessions, turn off all
                        social media notifications on your phone and close
                        unnecessary browser tabs to maintain absolute focus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningTips;
