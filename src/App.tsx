import { useMemo, useState, type ReactNode } from 'react'
import {
  Activity, ArrowDownRight, ArrowLeft, ArrowRight, BookOpen, Brain,
  Check, ChevronRight, CircleHelp, Compass, Eye, Flame, House, Lightbulb,
  Menu, Search, Settings2, Sparkles, Target, Zap,
} from 'lucide-react'
import { categories, lessons, practiceQuestion, type Lesson } from './data'

type Tab = 'Home' | 'Explore' | 'Practice' | 'Progress'

const navItems: { label: Tab; icon: typeof House }[] = [
  { label: 'Home', icon: House },
  { label: 'Explore', icon: Compass },
  { label: 'Practice', icon: Target },
  { label: 'Progress', icon: Activity },
]

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('Home')
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const [search, setSearch] = useState('')
  const [answer, setAnswer] = useState<number | null>(null)
  const [completed, setCompleted] = useState<string[]>([])

  const filteredLessons = useMemo(
    () => lessons.filter((lesson) =>
      (lesson.title + lesson.description + lesson.category).toLowerCase().includes(search.toLowerCase()),
    ),
    [search],
  )

  const finishLesson = (lesson: Lesson) => {
    setCompleted((current) => current.includes(lesson.id) ? current : [...current, lesson.id])
    setSelectedLesson(null)
  }

  if (selectedLesson) {
    return (
      <div className="app-shell">
        <Sidebar activeTab={activeTab} onNavigate={setActiveTab} />
        <main className="main-content lesson-page">
          <button className="back-button" onClick={() => setSelectedLesson(null)}><ArrowLeft size={16} /> Back to learning</button>
          <div className="lesson-layout">
            <article className="lesson-main">
              <div className="eyebrow">{selectedLesson.category} <span>·</span> {selectedLesson.level} <span>·</span> {selectedLesson.duration}</div>
              <h1 className="lesson-title">{selectedLesson.title}</h1>
              <p className="lesson-lead">{selectedLesson.description}</p>
              <div className="lesson-visual">
                <div className="visual-orbit orbit-one" />
                <div className="visual-orbit orbit-two" />
                <div className="visual-core"><Brain size={42} strokeWidth={1.2} /></div>
                <span className="visual-tag tag-one">NOTICE</span>
                <span className="visual-tag tag-two">QUESTION</span>
                <span className="visual-tag tag-three">REFLECT</span>
              </div>
              <section className="lesson-section">
                <div className="section-kicker">01 / THE IDEA</div>
                <h2>Understand the concept</h2>
                <p>{selectedLesson.description} This is a starting point for examining how people interpret information and make decisions. The goal is not to label every situation, but to develop a more careful way of thinking.</p>
              </section>
              <section className="lesson-section">
                <div className="section-kicker">02 / IN REAL LIFE</div>
                <h2>A practical example</h2>
                <div className="example-card"><Lightbulb size={18} /><p>{selectedLesson.example}</p></div>
              </section>
              <section className="lesson-section">
                <div className="section-kicker">03 / REMEMBER</div>
                <h2>Key takeaways</h2>
                <ul className="takeaway-list">{selectedLesson.takeaways.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
              </section>
              <button className="primary-button complete-button" onClick={() => finishLesson(selectedLesson)}>Mark lesson as complete <ArrowRight size={17} /></button>
            </article>
            <aside className="lesson-aside">
              <div className="aside-label">YOUR LEARNING PATH</div>
              <div className="path-step active"><span>01</span><div><strong>Understand</strong><small>Explore the core idea</small></div></div>
              <div className="path-step"><span>02</span><div><strong>Apply</strong><small>Connect it to real life</small></div></div>
              <div className="path-step"><span>03</span><div><strong>Remember</strong><small>Review key takeaways</small></div></div>
              <div className="aside-note"><Sparkles size={17} /><p>Take your time. Understanding matters more than speed.</p></div>
            </aside>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="app-shell">
      <Sidebar activeTab={activeTab} onNavigate={setActiveTab} />
      <main className="main-content">
        <header className="topbar">
          <div className="mobile-brand"><span className="brand-mark">T</span> talist</div>
          <div className="breadcrumb">Workspace <span>/</span> <strong>{activeTab}</strong></div>
          <div className="topbar-actions">
            <button className="icon-button" aria-label="Help"><CircleHelp size={18} /></button>
            <button className="avatar" aria-label="Profile">M</button>
          </div>
        </header>

        {activeTab === 'Home' && (
          <div className="page-content">
            <section className="welcome-row">
              <div>
                <div className="eyebrow">TUESDAY, 17 NOVEMBER</div>
                <h1>Think deeper.<br /><span>See beyond.</span></h1>
                <p className="welcome-copy">A little curiosity can change the way you see the world.</p>
              </div>
              <div className="welcome-art" aria-hidden="true"><div className="art-ring ring-a" /><div className="art-ring ring-b" /><div className="art-dot dot-a" /><div className="art-dot dot-b" /><Eye size={66} strokeWidth={1} /></div>
            </section>

            <section className="continue-card">
              <div className="continue-icon"><BookOpen size={19} /></div>
              <div className="continue-copy"><span className="eyebrow">PICK UP WHERE YOU LEFT OFF</span><h2>{lessons.find((lesson) => !completed.includes(lesson.id))?.title ?? 'You are all caught up'}</h2><p>{completed.length} of {lessons.length} sample lessons completed</p></div>
              <button className="text-button" onClick={() => setSelectedLesson(lessons.find((lesson) => !completed.includes(lesson.id)) ?? lessons[0])}>Continue <ArrowRight size={16} /></button>
            </section>

            <div className="section-heading"><div><span className="eyebrow">YOUR KNOWLEDGE, EXPANDED</span><h2>Explore a subject</h2></div><button className="subtle-button" onClick={() => setActiveTab('Explore')}>View all <ArrowRight size={15} /></button></div>
            <section className="category-grid">
              {categories.map((category) => <button className="category-card" key={category.id} onClick={() => { setSearch(category.name); setActiveTab('Explore') }}>
                <span className={`category-symbol ${category.color}`}>{category.icon}</span><span className="category-meta">{category.lessons} STARTER TOPICS</span><strong>{category.name}</strong><small>{category.description}</small><ChevronRight className="category-arrow" size={17} />
              </button>)}
            </section>

            <div className="section-heading"><div><span className="eyebrow">A GOOD PLACE TO START</span><h2>Featured lessons</h2></div><span className="muted-label">CURATED EXAMPLES</span></div>
            <section className="lesson-grid">
              {lessons.filter((lesson) => lesson.featured || lesson.id === 'correlation-causation').map((lesson) => <LessonCard key={lesson.id} lesson={lesson} completed={completed.includes(lesson.id)} onClick={() => setSelectedLesson(lesson)} />)}
            </section>
          </div>
        )}

        {activeTab === 'Explore' && (
          <div className="page-content">
            <div className="page-intro"><span className="eyebrow">FOLLOW YOUR CURIOSITY</span><h1>Explore</h1><p>Small lessons. Bigger perspectives.</p></div>
            <div className="search-box"><Search size={18} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search topics and lessons..." /><kbd>⌘ K</kbd></div>
            <section className="category-grid explore-categories">{categories.map((category) => <button className="category-card" key={category.id} onClick={() => setSearch(category.name)}><span className={`category-symbol ${category.color}`}>{category.icon}</span><span className="category-meta">{category.lessons} STARTER TOPICS</span><strong>{category.name}</strong><small>{category.description}</small><ChevronRight className="category-arrow" size={17} /></button>)}</section>
            <div className="section-heading"><div><span className="eyebrow">THE LIBRARY</span><h2>{search ? 'Search results' : 'All sample lessons'}</h2></div><span className="muted-label">{filteredLessons.length} LESSONS</span></div>
            <section className="lesson-grid">{filteredLessons.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} completed={completed.includes(lesson.id)} onClick={() => setSelectedLesson(lesson)} />)}</section>
            {filteredLessons.length === 0 && <div className="empty-state">No lessons found. Try another search.</div>}
          </div>
        )}

        {activeTab === 'Practice' && (
          <div className="page-content narrow-content">
            <div className="page-intro"><span className="eyebrow">PUT YOUR THINKING TO WORK</span><h1>Practice</h1><p>One question. One chance to slow down and think.</p></div>
            <div className="practice-card"><div className="practice-top"><span className="eyebrow">QUICK CHALLENGE · OBSERVATION</span><span className="practice-count">01 / 01</span></div><h2>{practiceQuestion.prompt}</h2><div className="answer-list">{practiceQuestion.options.map((option, index) => <button key={option} className={`answer-option ${answer === index ? 'selected' : ''} ${answer !== null && index === practiceQuestion.answer ? 'correct' : ''}`} onClick={() => setAnswer(index)}><span className="answer-letter">{String.fromCharCode(65 + index)}</span>{option}{answer !== null && index === practiceQuestion.answer && <Check size={17} />}</button>)}</div>{answer !== null && <div className={`answer-feedback ${answer === practiceQuestion.answer ? 'is-correct' : 'is-wrong'}`}><strong>{answer === practiceQuestion.answer ? 'Exactly right.' : 'Not quite — take another look.'}</strong><p>{practiceQuestion.explanation}</p></div>}<button className="primary-button" onClick={() => setAnswer(null)}>Reset question <ArrowRight size={16} /></button></div>
          </div>
        )}

        {activeTab === 'Progress' && (
          <div className="page-content">
            <div className="page-intro"><span className="eyebrow">YOUR PERSONAL JOURNEY</span><h1>Progress</h1><p>Consistency over intensity. Every idea you explore adds up.</p></div>
            <section className="stats-grid"><Stat icon={<BookOpen />} value={String(completed.length)} label="Lessons completed" /><Stat icon={<Zap />} value={String(completed.length * 25)} label="Sample XP earned" /><Stat icon={<Flame />} value={completed.length ? '1' : '0'} label="Learning streak" /></section>
            <div className="progress-panel"><div className="section-heading"><div><span className="eyebrow">YOUR STARTER LIBRARY</span><h2>Learning progress</h2></div><strong>{completed.length}/{lessons.length}</strong></div><div className="progress-track"><span style={{ width: `${(completed.length / lessons.length) * 100}%` }} /></div><div className="progress-caption"><span>Getting started</span><span>{Math.round((completed.length / lessons.length) * 100)}% complete</span></div>{lessons.map((lesson) => <div className="progress-lesson" key={lesson.id}><span className={completed.includes(lesson.id) ? 'progress-check done' : 'progress-check'}>{completed.includes(lesson.id) ? <Check size={13} /> : <BookOpen size={13} />}</span><div><strong>{lesson.title}</strong><small>{lesson.category}</small></div><span className="progress-status">{completed.includes(lesson.id) ? 'Completed' : 'Not started'}</span></div>)}</div>
          </div>
        )}
        <footer className="page-footer"><span> TALIST <span className="footer-dot">·</span> EARLY FOUNDATION</span><span>Curiosity is a practice.</span></footer>
      </main>
      <nav className="mobile-nav">{navItems.map(({ label, icon: Icon }) => <button key={label} className={activeTab === label ? 'active' : ''} onClick={() => setActiveTab(label)}><Icon size={19} /><span>{label}</span></button>)}</nav>
    </div>
  )
}

function Sidebar({ activeTab, onNavigate }: { activeTab: Tab; onNavigate: (tab: Tab) => void }) {
  return <aside className="sidebar"><div className="brand"><span className="brand-mark">T</span><span>talist<span className="brand-period">.</span></span></div><div className="workspace-label">PERSONAL WORKSPACE</div><nav className="side-nav">{navItems.map(({ label, icon: Icon }) => <button key={label} className={activeTab === label ? 'active' : ''} onClick={() => onNavigate(label)}><Icon size={18} /><span>{label}</span>{label === 'Practice' && <span className="nav-new">TRY</span>}</button>)}</nav><div className="sidebar-bottom"><div className="sidebar-note"><Sparkles size={17} /><p>Stay curious.<br /><strong>Think independently.</strong></p></div><button className="settings-link"><Settings2 size={17} /> Settings <span className="soon-label">SOON</span></button><div className="profile-row"><div className="avatar">M</div><div><strong>My workspace</strong><small>Personal learner</small></div><Menu size={17} /></div></div></aside>
}

function LessonCard({ lesson, completed, onClick }: { lesson: Lesson; completed: boolean; onClick: () => void }) {
  return <button className="lesson-card" onClick={onClick}><div className="lesson-card-top"><span className="lesson-category">{lesson.category}</span>{completed ? <span className="completed-label"><Check size={12} /> DONE</span> : <span className="lesson-duration">{lesson.duration}</span>}</div><div className="lesson-card-art"><div className="mini-orbit orbit-left" /><div className="mini-orbit orbit-right" /><span>{lesson.category === 'Psychology' ? <Brain /> : lesson.category === 'Deduction' ? <Eye /> : <Lightbulb />}</span></div><h3>{lesson.title}</h3><p>{lesson.description}</p><div className="lesson-card-bottom"><span>{lesson.level}</span><span className="card-open">Explore <ArrowUpRightIcon /></span></div></button>
}

function ArrowUpRightIcon() { return <ArrowDownRight size={15} className="rotated-arrow" /> }
function Stat({ icon, value, label }: { icon: ReactNode; value: string; label: string }) { return <div className="stat-card"><span>{icon}</span><strong>{value}</strong><small>{label}</small></div> }

export default App