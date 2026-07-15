
const kit = {
  subjects: ['English','Hindi','Maths','Science','Social Science','Computer'],

  
  characters: [
    { id:'mom',       name:'Strict Indian Mom',  match:['mom','mother'] },
    { id:'dad',       name:'Disappointed Dad',   match:['dad','father'] },
    { id:'tuition',   name:'Tuition Teacher',    match:['tuition'] },
    { id:'principal', name:'School Principal',    match:['principal'] },
    { id:'gamer',     name:'Toxic Gamer Friend', match:['gamer','gaming'] },
    { id:'villain',   name:'Bollywood Villain',  match:['villain','bollywood'] },
    { id:'coach',     name:'Motivational Coach', match:['coach','motivat'] },
    { id:'robot',     name:'Emotionless Robot',  match:['robot','ai','bot'] }
  ],

  roastResponses: {
    mom: { legendary:["95? Sharma Ji's son got 98. What happened to the other 5 marks?","98? My friend's daughter got 100 and she also does all the household chores."],
      solid:["80+? At least it's not a phone number this time.","85? Okay. But don't expect celebrations. This is just... acceptable."],
      average:["60? My blood pressure is higher than your Math score.","68? If marks were money, you'd still be asking me for pocket money."],
      poor:["45? Did you write the exam or just doodle in the answer sheet?","50? The only thing you've balanced is right on the edge of failure."],
      bad:["35? Beta, have you considered a career in politics?","28? The only number lower than this is my faith in your future."] },
    dad: { legendary:["95? Hmm. Not bad. *continues reading newspaper without looking up*","98? Still two less than my expectations. But I'm not angry. Just disappointed."],
      solid:["80? *sighs* I see you've maintained consistency. Mediocrity is also a skill.","84? Your cousin is already preparing for JEE. You? Preparing excuses."],
      average:["60? *removes glasses slowly* Tell me honestly. Did you even open the book?","68? I'd make a joke but I'm afraid you'd miss the punchline too."],
      poor:["48? I told your mother not to trust that coaching center.","55? I'm not angry, I'm just... recalculating my retirement plans."],
      bad:["30? *long stare* Just go to your room. And think. About coal mining.","35? Don't worry, beta. In the school of life, you're still in detention."] },
    tuition: { legendary:["95? Good. But I taught you enough for 100. Where did 5 marks go?","96? You're my best student. Out of a batch of average expectations."],
      solid:["84? I charged your parents for 100. You're returning 84.","82? With these marks, you'll get into a decent college. Not a good one."],
      average:["65? Do you know how many students I have? Too many to remember this score.","70? You're the reason I charge per subject instead of guaranteed results."],
      poor:["48? I gave you the notes. I gave you the tricks. You gave me depression.","55? Please don't tell people I teach you. I have a reputation."],
      bad:["28? For this marks, I should be paying your parents.","38? I made a chart of my students. You're the reason I started the y-axis from 0."] },
    principal: { legendary:["95+? Well done. The school ranking thanks you. Carry on.","96? Excellent. Please mention this in the school diary. We need content."],
      solid:["84? You exist in that safe zone between invisible and tolerable.","85? Good. Not great. Like our canteen food."],
      average:["65? Just enough to not trigger my mandatory counseling session policy.","70? C grade. C for 'Can do better'. Also C for 'Complaint to parents'."],
      poor:["48? This is not a mark sheet. This is a cry for help.","55? My door is always open. Your parents will walk through it soon."],
      bad:["25? You have a unique talent. The talent to make me lose my faith in education.","38? I'm adding you to the list. The list of students whose report cards I dread."] },
    gamer: { legendary:["95? Bro, you prestiged in real life. Absolute gigachad energy.","98? Poggers. Your K/D ratio in exams is insane."],
      solid:["84? Decent loot. Could have raided the library harder.","82? Bro grinded but forgot to use XP boosters. Classic."],
      average:["65? Bro got eliminated before the exam even started.","70? Mid-tier loot. Not even worth the backpack space."],
      poor:["48? Connection lost. Brain not found.","55? You pressed F to pay respects to your own grades."],
      bad:["28? Uninstalled. Literally unplayable academic performance.","38? This performance is so toxic, even ranked players feel bad."] },
    villain: { legendary:["95? Tumse na ho paayega... 100. Next time, the throne is mine.","96? Iss duniya mein do tarah ke log hote hain... tum dono nahi ho."],
      solid:["84? You have potential. Like a side villain who could become main if he tried harder.","82? Main uss raat ko kabhi nahi bhoolta... jab tumne padhai chhod di."],
      average:["65? Tum kya udne wale kothe se dusre udne wale kothe pe jump karoge?","70? Mujhe sirf 100 waale students pasand hain."],
      poor:["48? Mere dushman bhi tumse zyada number le aate hain.","55? Agar fail hona art hota, toh tum Picasso hote."],
      bad:["28? Isse better result toh mere gundo ke report card hote hain.","38? Naye villain banoge tum. Exam hall mein. Kyunki teacher dar jayenge."] },
    coach: { legendary:["95? This isn't your final form. Your final form is unstoppable. Keep going!","96? You didn't just pass. You DOMINATED. Now do it again."],
      solid:["84? Your potential called. It says you're using 84% of it.","85? Every champion was once a contender that refused to give up."],
      average:["65? Fall down seven times, stand up eight. Then maybe study once?","70? Believe you can and you're halfway there. The other half is actual studying."],
      poor:["48? Don't watch the clock. Do what it does. Keep going. Quickly.","55? Your time is limited. Especially if the Board changes the passing criteria."],
      bad:["28? It always seems impossible until it's done. That's what I tell myself about your comeback.","38? Success is not final, failure is not fatal. But also... tuition helps."] },
    robot: { legendary:["95+. Grade: A+. Human emotion: Pride. Not detected. Good job.","96. Output acceptable. You have pleased the algorithm. This time."],
      solid:["84. B-plus. Not optimal. Not failure. You exist in the null zone.","82. Analysis complete. You have scored higher than 60% of your peers. Mediocre triumph."],
      average:["65. Scanning for effort... effort partially detected.","70. C plus. You are the human equivalent of a loading screen."],
      poor:["48. Warning: Academic underperformance detected. Parental notification queued.","55. Suboptimal. Recalibration of study habits advised."],
      bad:["28. System failure. Core processor not engaged during exam duration.","38. Grade: E. E stands for Error. You are an error. Fix yourself."] }
  },

  excuseCol1:["Power outage in our area","Notebook forgotten at tuition","Unexpected family function","Relative visited unannounced","Internet stopped working","Doctor appointment ran late","Metro was delayed","Phone suddenly shut down","Heavy rain flooded the road","School diary got lost"],
  excuseCol2:["homework photos became corrupted","notebook pages got wet","important pages accidentally tore","bag got exchanged with cousin","phone battery died while uploading","rough work got thrown out","notebook left at coaching","printer stopped working","cloud sync failed mid-save","file format became unsupported"],
  excuseCol3:["need one extra day to recover","have to rewrite everything","couldn't access the final copy","only a rough draft remains","lost the completed version","need to recover deleted files","must reshoot all photos","have to reprint the entire thing","need to get the notebook back from tuition","only the hard copy exists now"],

  excuseTemplates:{
    late:{
      c1:["Heavy traffic near the school gate","Our school bus broke down midway","The metro was unusually delayed today","There was a sudden roadblock nearby","Our car had a flat tyre on the way"],
      c2:["I still rushed to reach as fast as I could","I tried calling home but no one picked up in time","I had no way to inform anyone in advance"],
      c3:["I promise this won't happen again","it genuinely could not be avoided this morning","I've already arranged to leave earlier from tomorrow"]
    },
    absent:{
      c1:["I was running a mild fever since last night","There was a sudden family emergency at home","I had to accompany a relative to the hospital","Our area had a local shutdown/bandh"],
      c2:["my parents felt it was safer for me to rest","I couldn't get a doctor's note in time","the situation needed me to be home"],
      c3:["I have caught up on the missed portions from a classmate","I'll bring a proper note from my parents tomorrow","I'm fully prepared to make up for the lost day"]
    },
    test:{
      c1:["I was down with a bad headache during prep","Our internet was down while I was revising online notes","There was a mix-up and I revised the wrong chapter","A family function took up my entire revision weekend"],
      c2:["I genuinely tried to prepare well in advance","I realised the gap only once the paper started","it affected my performance more than I expected"],
      c3:["I'd really appreciate a chance to improve this score","I'm already revising properly for the next test","I promise to do better with more focused prep"]
    },
    uniform:{
      c1:["My uniform was still wet from washing this morning","My shoes got damaged and new ones haven't arrived yet","My ID card was misplaced during a house shift","My blazer is at the tailor for alteration"],
      c2:["I didn't realise it until I was already dressed","there was no backup option available at home","I informed my parents right away"],
      c3:["it will be sorted by tomorrow","I'll have the correct uniform/ID from the next class","I've kept a spare ready for tomorrow now"]
    },
    item:{
      c1:["I packed my bag in a hurry this morning","My younger sibling accidentally took my bag by mistake","The item was left charging/drying at home overnight","We were shifting furniture and it got misplaced"],
      c2:["I only noticed it after reaching school","I called home but it couldn't be brought in time","I checked my whole bag twice before realising"],
      c3:["I'll make sure to bring it first thing tomorrow","I've already kept it by the door for tomorrow","it won't happen again, I've made a checklist now"]
    },
    other:{
      c1:["Something unexpected came up at home","There was a last-minute family matter to attend to","A situation outside my control got in the way","Plans changed suddenly and I couldn't adjust in time"],
      c2:["I tried my best to manage it anyway","I didn't have enough time to sort it out fully","I genuinely couldn't help how it turned out"],
      c3:["I'll make sure it's resolved by tomorrow","I appreciate your understanding on this one","it won't be repeated going forward"]
    }
  },

  teachers:[
    { id:'strict', name:'Strict Teacher', match:['strict'], reactions:["This is the third excuse this month. Sit in the front bench tomorrow.","I have a folder just for your stories. It's getting thick.","Interesting. I will confirm with your parents during the PTM."] },
    { id:'cool',   name:'Cool Teacher',   match:['cool','chill'], reactions:["Okay, just email it by tonight. Don't make it a habit though.","Rough times happen. Get me a copy by Monday and we're good.","I'll allow it. But you're buying me a chai if this happens again."] },
    { id:'new',    name:'New Teacher',    match:['new'], reactions:["Oh... um... okay. Please submit it tomorrow then?","Is this common? Should I inform the coordinator? No? Okay then.","That sounds very complicated. Technology, right? Bring it tomorrow."] },
    { id:'tuition',name:'Tuition Teacher',match:['tuition'], reactions:["You're paying me to finish homework, not excuses.","This excuse is more polished than your worksheet. Concerning.","I'll let it slide. But only because your mother already paid until December."] }
  ],

  situations:[
    { id:'homework',  name:'Missed Homework',      match:['homework','hw','assignment','notebook work'] },
    { id:'late',      name:'Came Late to School',  match:['late','tardy','missed assembly','entry'] },
    { id:'absent',    name:'Was Absent',           match:['absent','bunk','missed school','sick leave'] },
    { id:'test',      name:'Missed/Failed a Test', match:['test','exam','failed','marks','unprepared'] },
    { id:'uniform',   name:'Uniform/ID Issue',     match:['uniform','id card','dress code','shoes'] },
    { id:'item',      name:'Forgot an Item',       match:['forgot','left at home','book','project','item'] },
    { id:'other',     name:'Something Else',       match:['other','else','different'] }
  ],

  quotes:[
    "Tomorrow's homework has been today's plan for three days.",
    "Sharma Ji's son is the benchmark I never signed up for.",
    "Attendance is just adult hide and seek.",
    "CBSE stands for Consistently Building Student Exhaustion.",
    "Revision is proof that time travel exists. You redo the same chapter forever."
  ],

  covers:[
    ()=>`<div class="fake-wiki"><div class="fake-wiki-header"><div class="fake-wiki-logo">W</div><div><h1>Wikipedia</h1><p>The Free Encyclopedia</p></div></div><aside><h3>Photosynthesis</h3><p><b>Classification</b></p><p>Process: Metabolic</p><p>Organisms: Plants, algae, cyanobacteria</p></aside><h1>Photosynthesis</h1><p><b>Photosynthesis</b> is a process used by plants and other organisms to convert light energy into chemical energy that can later be released to fuel metabolic activities.</p><p>In plants, algae and cyanobacteria, sugars are synthesised through the Calvin cycle, in which atmospheric carbon dioxide is incorporated into existing organic carbon compounds such as ribulose bisphosphate.</p><p>The rate of photosynthesis is determined by light intensity, carbon dioxide concentration, and temperature. Students are advised to draw the diagram with proper labelling to secure full marks in the viva.</p></div>`,
    ()=>`<div class="fake-docs"><div class="fake-docs-toolbar"><span>📄</span> <b>Untitled document</b> &nbsp;File&nbsp; Edit&nbsp; View&nbsp; Insert&nbsp; Format</div><div class="fake-docs-paper"><h2>Essay on the Importance of Democracy in India</h2><p>India is the largest democracy in the world. Democracy ensures that power lies in the hands of the people, exercised through elected representatives.</p><p>The Constitution of India, adopted on 26th January 1950, laid the foundation of a sovereign, socialist, secular, democratic republic.</p><p>Democracy promotes equality and freedom. However, corruption, illiteracy, and poverty hinder its smooth functioning.</p><p><i>(Word count: 312)</i></p></div></div>`,
    ()=>`<div class="fake-excel"><div class="fake-excel-toolbar">Attendance &amp; Marks Record — Class 10-B</div><div class="fake-excel-grid"><table><thead><tr><th>Roll</th><th>Name</th><th>Eng</th><th>Maths</th><th>Sci</th><th>Attn</th><th>Remarks</th></tr></thead><tbody><tr><td>1</td><td>Aarav K.</td><td>88</td><td>92</td><td>85</td><td>94%</td><td>Good</td></tr><tr><td>2</td><td>Priya S.</td><td>91</td><td>95</td><td>89</td><td>96%</td><td>Excellent</td></tr><tr><td>3</td><td>Rohan M.</td><td>74</td><td>68</td><td>72</td><td>82%</td><td>Needs Improvement</td></tr><tr><td>5</td><td>Varun T.</td><td>62</td><td>55</td><td>58</td><td>76%</td><td>PTM Required</td></tr></tbody></table></div></div>`,
    ()=>`<div class="fake-note"><h1>Physics Notes: Electricity (Class 10)</h1><ul><li>Electric current (I) = Charge (Q) / Time (t)</li><li>Potential Difference (V) = Work (W) / Charge (Q)</li><li>Ohm's Law: V = IR</li><li>Series: R_eq = R1 + R2 + R3</li><li>Parallel: 1/R_eq = 1/R1 + 1/R2 + 1/R3</li><li>Power (P) = VI = I²R = V²/R</li></ul><p><b>Lab Record:</b> Verify Ohm's Law using voltmeter-ammeter method.</p></div>`,
    ()=>`<div class="fake-note"><h1>History: The Nationalist Movement in Indo-China</h1><p><b>1930:</b> Formation of the Vietnamese Communist Party by Ho Chi Minh.</p><p><b>1945:</b> August Revolution. Independence declared.</p><p><b>1954:</b> Battle of Dien Bien Phu. Geneva Accords signed.</p><p><b>1975:</b> End of war. Reunification of Vietnam.</p><p><i>For exam: Focus on three phases — Colonial, War, Unification.</i></p></div>`,
    ()=>`<div class="fake-note"><h1>Geography Report: Climate of India</h1><p>India's climate is broadly tropical monsoon type. The Tropic of Cancer divides the country into tropical and subtropical zones.</p><ul><li>Differential heating of land and water</li><li>Shift in the Inter Tropical Convergence Zone</li><li>Southern Oscillation and ENSO</li></ul><p><i>Map work: Shade regions receiving &gt;200cm rainfall.</i></p></div>`,
    ()=>`<div class="fake-note"><h1>Chemistry Practical: Salt Analysis</h1><p><b>Aim:</b> To identify the cation and anion present in the given salt.</p><ul><li>Colour: White</li><li>Dilute HCl test: Brisk effervescence observed</li><li>Gas passed through lime water: turns milky</li></ul><p><b>Result:</b> Salt identified as Ammonium Carbonate.</p></div>`
  ]
};

const sfx = {
  ctx: null,
  muted: false, 

  ensure(){
    if(!this.ctx){
      try{ this.ctx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch(e){ }
    }
    
    if(this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  },

  play(type){
    if(this.muted) return;
    this.ensure();
    if(!this.ctx) return;

    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.connect(g); g.connect(this.ctx.destination);

    switch(type){
      case 'key': 
        o.type='square'; o.frequency.setValueAtTime(1400,t);
        g.gain.setValueAtTime(0.02,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.03);
        o.start(t); o.stop(t+0.03);
        break;
      case 'tear': 
        o.type='sawtooth'; o.frequency.setValueAtTime(300,t); o.frequency.exponentialRampToValueAtTime(60,t+0.5);
        g.gain.setValueAtTime(0.05,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.5);
        o.start(t); o.stop(t+0.5);
        break;
      case 'beep': 
        o.type='sine'; o.frequency.setValueAtTime(700,t); o.frequency.exponentialRampToValueAtTime(1000,t+0.08);
        g.gain.setValueAtTime(0.06,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.12);
        o.start(t); o.stop(t+0.12);
        break;
      case 'slam': 
        o.type='square'; o.frequency.setValueAtTime(90,t);
        g.gain.setValueAtTime(0.08,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.12);
        o.start(t); o.stop(t+0.12);
        break;
      case 'boot': 
        o.type='triangle'; o.frequency.setValueAtTime(220,t); o.frequency.exponentialRampToValueAtTime(880,t+0.4);
        g.gain.setValueAtTime(0.05,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.45);
        o.start(t); o.stop(t+0.45);
        break;
    }
  }
};

const funkBeat = {
  ctx:null, playing:false, timer:null, step:0, nextTime:0, bpm:108,
  pattern:{
    kick:   [1,0,0,0, 0,0,1,0, 0,0,1,0, 0,0,0,0],
    snare:  [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
    hat:    [1,1,0,1, 1,0,1,1, 0,1,1,0, 1,1,0,1],
    hatOpen:[0,0,0,1, 0,0,0,0, 0,0,0,1, 0,0,0,0],
    bass:   [110,0,146.83,0, 0,110,0,164.81, 130.81,0,110,0, 146.83,0,0,110]
  },

  ensure(){ sfx.ensure(); this.ctx = sfx.ctx; },

  kick(t){
    if(!this.ctx) return;
    const o=this.ctx.createOscillator(), g=this.ctx.createGain();
    o.type='sine';
    o.frequency.setValueAtTime(150,t);
    o.frequency.exponentialRampToValueAtTime(45,t+0.13);
    g.gain.setValueAtTime(0.9,t);
    g.gain.exponentialRampToValueAtTime(0.001,t+0.28);
    o.connect(g); g.connect(this.ctx.destination);
    o.start(t); o.stop(t+0.28);
  },

  noiseBurst(t, dur, hpFreq, peak){
    const size = Math.max(1, Math.floor(this.ctx.sampleRate*dur));
    const buffer = this.ctx.createBuffer(1, size, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for(let i=0;i<size;i++) data[i] = (Math.random()*2-1) * (1 - i/size);
    const src = this.ctx.createBufferSource(); src.buffer = buffer;
    const filter = this.ctx.createBiquadFilter(); filter.type='highpass'; filter.frequency.value=hpFreq;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(peak,t);
    g.gain.exponentialRampToValueAtTime(0.001,t+dur);
    src.connect(filter); filter.connect(g); g.connect(this.ctx.destination);
    src.start(t); src.stop(t+dur);
  },
  snare(t){ this.noiseBurst(t, 0.16, 1200, 0.32); },
  hat(t, open){ this.noiseBurst(t, open ? 0.2 : 0.045, 7500, open ? 0.1 : 0.16); },

  bass(t, freq){
    if(!this.ctx) return;
    const o=this.ctx.createOscillator(), g=this.ctx.createGain(), filter=this.ctx.createBiquadFilter();
    o.type='sawtooth'; o.frequency.setValueAtTime(freq,t);
    filter.type='lowpass'; filter.frequency.setValueAtTime(900,t);
    g.gain.setValueAtTime(0.0001,t);
    g.gain.linearRampToValueAtTime(0.22,t+0.015);
    g.gain.exponentialRampToValueAtTime(0.001,t+0.17);
    o.connect(filter); filter.connect(g); g.connect(this.ctx.destination);
    o.start(t); o.stop(t+0.17);
  },

  fireStep(i,t){
    const p=this.pattern;
    if(p.kick[i])  this.kick(t);
    if(p.snare[i]) this.snare(t);
    if(p.hat[i])   this.hat(t, !!p.hatOpen[i]);
    if(p.bass[i])  this.bass(t, p.bass[i]);
  },

  start(){
    if(this.playing) return;
    this.ensure();
    if(!this.ctx) return;
    this.playing = true;
    this.step = 0;
    const stepDur = 60/this.bpm/4; 
    this.nextTime = this.ctx.currentTime + 0.05;
    this.timer = setInterval(()=>{
      
      while(this.nextTime < this.ctx.currentTime + 0.1){
        this.fireStep(this.step % 16, this.nextTime);
        this.nextTime += stepDur;
        this.step++;
      }
    }, 25);
  },

  stop(){
    this.playing = false;
    if(this.timer) clearInterval(this.timer);
    this.timer = null;
  }
};

const state = {
  hits: 0,            
  inSystem: false,    
  panicShown: false,
  funkOn: false,
  flow: null,         
  firstFabDone: false
};

const log = () => document.getElementById('termLog');

const typeQueue = [];
let isTyping = false;

function print(text, cls){
  return new Promise(resolve=>{
    typeQueue.push({ text, cls: cls || 'out', instant: cls === 'you', resolve });
    if(!isTyping) drainQueue();
  });
}

function drainQueue(){
  if(!typeQueue.length){ isTyping = false; return; }
  isTyping = true;

  const job = typeQueue.shift();
  const line = document.createElement('div');
  line.className = 'line ' + job.cls;
  line.style.animation = 'none';   
  line.style.opacity = '1';
  log().appendChild(line);
  log().scrollTop = log().scrollHeight;

  if(job.instant || job.text.length > 240){
    line.textContent = job.text;
    log().scrollTop = log().scrollHeight;
    job.resolve(line);
    setTimeout(drainQueue, 40);
    return;
  }

  const caret = document.createElement('span');
  caret.className = 'type-caret';
  const speed = 14 + Math.random()*10; 
  let i = 0;

  (function tick(){
    i++;
    line.textContent = job.text.slice(0, i);
    line.appendChild(caret);
    log().scrollTop = log().scrollHeight;
    if(i % 3 === 0) sfx.play('key');
    if(i >= job.text.length){
      caret.remove();
      job.resolve(line);
      setTimeout(drainQueue, 90);
      return;
    }
    setTimeout(tick, speed);
  })();
}

function printHTML(html, cls){
  const line = document.createElement('div');
  line.className = 'line ' + (cls || 'out');
  line.innerHTML = html;
  log().appendChild(line);
  log().scrollTop = log().scrollHeight;
  return line;
}

const setPrompt = p => { document.getElementById('termPrompt').textContent = p; };

function armCover(){
  document.querySelectorAll('.tw').forEach(el=>{
    el.addEventListener('click', ()=>{
      sfx.play('key');
      
      el.classList.remove('tw-hit');
      void el.offsetWidth;
      el.classList.add('tw-hit');
      if(++state.hits >= 3) openKit();
    });
  });

  const h1 = document.querySelector('.cover h1');
  let pressTimer = null;
  h1.addEventListener('pointerdown', ()=>{ pressTimer = setTimeout(openKit, 700); });
  h1.addEventListener('pointerup',   ()=>{ clearTimeout(pressTimer); });
  h1.addEventListener('pointerleave',()=>{ clearTimeout(pressTimer); });

  document.addEventListener('keydown', (e)=>{
    if(e.key !== 'Escape') return;
    e.preventDefault();
    if(state.inSystem) togglePanic();
    else openKit();
  });
}

function openKit(){
  if(state.inSystem) return;
  state.inSystem = true;
  document.title = 'Student Survival Kit';
  sfx.play('tear');

  const shape = document.getElementById('tearShape');
  const pts = [];
  const teeth = 14;
  for(let i=0;i<=teeth;i++){
    const x = (i/teeth)*100;
    const y = i % 2 === 0 ? Math.random()*20 : 100 - Math.random()*20;
    pts.push(`${x},${y}`);
  }
  pts.push('100,100','0,100');
  shape.setAttribute('points', pts.join(' '));

  const layer = document.getElementById('tearLayer');
  layer.classList.add('active');

  setTimeout(()=>{
    const sys = document.getElementById('system');
    document.getElementById('cover').style.display = 'none';
    sys.hidden = false;
    document.getElementById('panicBtn').hidden = false;
    document.getElementById('funkBtn').hidden = false;
    tintForTime();
    startParticles();
    
    sys.classList.remove('crt-on'); void sys.offsetWidth; sys.classList.add('crt-on');
    sfx.play('boot');
    boot();
  }, 260);

  setTimeout(()=>{ layer.classList.remove('active'); }, 950);
}

function backToBook(){
  state.inSystem = false;
  state.flow = null;

  if(state.funkOn){
    state.funkOn = false;
    funkBeat.stop();
    document.getElementById('system').classList.remove('funk-mode');
    const disco = document.getElementById('funkDisco');
    if(disco) disco.hidden = true;
    const btn = document.getElementById('funkBtn');
    if(btn){ btn.classList.remove('on'); btn.textContent = '🕺 funk mode'; btn.setAttribute('aria-pressed','false'); }
  }

  document.title = 'Federalism — NCERT Political Science, Class X';
  document.getElementById('system').hidden = true;
  document.getElementById('panicBtn').hidden = true;
  document.getElementById('funkBtn').hidden = true;
  document.getElementById('panicCover').hidden = true;
  document.getElementById('cover').style.display = 'block';
  log().innerHTML = '';
  state.hits = 0;
  stopParticles();
  window.scrollTo({ top:0 });
}

async function boot(){
  await print('BUILD LOADED — root access: guest', 'sys');

  printHTML('<span class="boot-bar">[<span id="bootFill"></span>] booting modules…</span>', 'sys');
  await new Promise(done=>{
    let n = 0;
    const iv = setInterval(()=>{
      n++;
      const fill = document.getElementById('bootFill');
      if(fill) fill.textContent = `${'█'.repeat(n)}${'░'.repeat(14-n)} ${Math.round(n/14*100)}%`;
      if(n >= 14){ clearInterval(iv); done(); }
    }, 55);
  });

  await print('this is not a fake NCERT chapter. that was the other one.', 'dim');
  await print('type what you need — try "excuse", "roast", or "help".', 'sys');
  setPrompt('guest>');
}

function tintForTime(){
  const h = new Date().getHours();
  let bg, bg2, glow;
  if(h >= 5 && h < 8){        bg='#050d09'; bg2='#0d1f13'; glow='rgba(90,230,140,0.45)'; } 
  else if(h >= 8 && h < 17){  bg='#061209'; bg2='#0f2416'; glow='rgba(80,255,140,0.6)';  } 
  else if(h >= 17 && h < 20){ bg='#0a0f06'; bg2='#1a220e'; glow='rgba(180,220,80,0.5)';  } 
  else {                      bg='#040806'; bg2='#0a120c'; glow='rgba(50,180,100,0.4)';  } 
  const root = document.documentElement.style;
  root.setProperty('--term-bg', bg);
  root.setProperty('--term-bg2', bg2);
  root.setProperty('--term-glow', glow);
}
setInterval(()=>{ if(state.inSystem) tintForTime(); }, 5*60*1000);

function startCursorDust(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.getElementById('cursorTrailCanvas');
  const ctx = canvas.getContext('2d');
  const particles = [];
  let last = { x:-999, y:-999 };

  function resize(){
    const dpr = Math.min(window.devicePixelRatio || 1, 2); 
    canvas.width  = Math.round(window.innerWidth * dpr);
    canvas.height = Math.round(window.innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawn(x, y){
    const dx = x - last.x, dy = y - last.y;
    const dist = Math.hypot(dx, dy);
    if(dist < 4) return; 
    last = { x, y };
    const count = Math.min(4, Math.max(1, Math.floor(dist/9)));
    for(let i=0;i<count;i++){
      particles.push({
        x: x + (Math.random()-0.5)*7,
        y: y + (Math.random()-0.5)*7,
        vx:(Math.random()-0.5)*0.7,
        vy:(Math.random()-0.5)*0.7 - 0.25,
        life:1,
        decay:0.012 + Math.random()*0.012,
        size:0.8 + Math.random()*1.7
      });
    }
    
    if(particles.length > 180) particles.splice(0, particles.length - 180);
  }

  function draw(){
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const inside = state.inSystem;
    for(let i=particles.length-1;i>=0;i--){
      const p = particles[i];
      p.x += p.vx; p.y += p.vy;
      p.vy += 0.008; 
      p.life -= p.decay;
      if(p.life <= 0){ particles.splice(i,1); continue; }
      ctx.fillStyle = inside
        ? `rgba(62,240,122,${p.life*0.72})`
        : `rgba(156,47,38,${p.life*0.48})`;
      if(inside){
        ctx.fillRect(p.x, p.y, p.size, p.size); 
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
        ctx.fill();
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', e=>{
    
    if(e.pointerType === 'touch' || !document.getElementById('panicCover').hidden) return;
    spawn(e.clientX, e.clientY);
  });
  draw();
}

let particleRAF = null;
function startParticles(){
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let w, h, mouse = { x:-999, y:-999 };
  const pts = [];

  function resize(){ w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; }
  resize();

  const onResize = resize;
  const onMove = e=>{ const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
  window.addEventListener('resize', onResize);
  window.addEventListener('pointermove', onMove);
  canvas._cleanup = ()=>{ window.removeEventListener('resize', onResize); window.removeEventListener('pointermove', onMove); };

  for(let i=0;i<55;i++){
    pts.push({
      x:Math.random()*w, y:Math.random()*h,
      vx:(Math.random()-0.5)*0.15, vy:(Math.random()-0.5)*0.15,
      r:Math.random()*1.6+0.4,
      char: Math.random() < 0.15 ? (Math.random() < 0.5 ? '0' : '1') : null
    });
  }

  function draw(){
    ctx.clearRect(0, 0, w, h);
    for(const p of pts){
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const dist = Math.hypot(dx, dy);
      if(dist < 110){
        const f = (110 - dist)/110 * 0.6;
        p.vx += (dx/(dist||1)) * f * 0.03;
        p.vy += (dy/(dist||1)) * f * 0.03;
      }
      p.vx *= 0.98; p.vy *= 0.98;
      p.x += p.vx; p.y += p.vy;
      
      if(p.x < 0) p.x = w; else if(p.x > w) p.x = 0;
      if(p.y < 0) p.y = h; else if(p.y > h) p.y = 0;
      if(p.char){
        ctx.fillStyle = 'rgba(62,240,122,0.55)';
        ctx.font = '11px monospace';
        ctx.fillText(p.char, p.x, p.y);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = 'rgba(62,240,122,0.5)';
        ctx.fill();
      }
    }
    particleRAF = requestAnimationFrame(draw);
  }
  draw();
}

function stopParticles(){
  if(particleRAF) cancelAnimationFrame(particleRAF);
  particleRAF = null;
  const canvas = document.getElementById('particleCanvas');
  if(canvas && canvas._cleanup) canvas._cleanup();
  const ctx = canvas && canvas.getContext('2d');
  if(ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function runCard(command){
  const input = document.getElementById('termInput');
  if(command === 'hide'){ queuePanicNote(); togglePanic(); return; }

  if(state.flow){
    state.flow = null;
    setPrompt('guest>');
    print('previous operation cancelled.', 'dim');
  }

  print(command, 'you');
  if(command === 'roast')  startRoast();
  if(command === 'excuse') startExcuse();
  input.focus();
}

function handleInput(v){
  print(v, 'you');
  if(state.flow){ continueFlow(v); return; }

  const s = v.toLowerCase();

  if(/^(help|\?|commands)/.test(s)){
    print('available: roast · excuse · hide · funk · exit · clear', 'sys');
    print('  roast   — feed it marks, it feeds back a reaction', 'dim');
    print('  excuse  — tell it who you need to convince', 'dim');
    print('  hide    — slam down a different disguise, instantly', 'dim');
    print('  funk    — groovy background, synthesized funk beat', 'dim');
    print('  exit    — go back to looking like a textbook', 'dim');
    return;
  }
  if(/clear/.test(s)){ log().innerHTML = ''; return; }
  if(/exit|blend in|cover|textbook/.test(s)){ backToBook(); return; }
  if(/^funk|groove|disco|get down/.test(s)){ toggleFunk(); return; }
  if(/hide|panic|teacher.?s? coming|walk(ing)? in/.test(s)){ togglePanic(); return; }
  if(/excuse|sorry|late|forgot|didn.?t (do|finish)|homework|alibi/.test(s)){ startExcuse(); return; }
  if(/roast|marks|report card|score|grades?/.test(s)){ startRoast(); return; }
  if(/who are you|what are you|about/.test(s)){
    print("a toolkit that used to look like a homepage. now it looks like a homework problem.", 'sys');
    return;
  }

  const q = kit.quotes[Math.floor(Math.random()*kit.quotes.length)];
  print(`didn't catch that as a command. for what it's worth: "${q}"`, 'dim');
  print('try "roast", "excuse", or "help".', 'sys');
}

function startExcuse(){
  state.flow = { type:'excuse', step:'situation' };
  print('what\'s the problem? (homework / late / absent / test / uniform / item / other)', 'sys');
  setPrompt('excuse>');
}

function startRoast(){
  state.flow = { type:'roast', step:'marks' };
  print(`give me marks for ${kit.subjects.join(', ')} — comma separated, or type "random"`, 'sys');
  setPrompt('roast>');
}

function continueFlow(v){
  const s = v.toLowerCase().trim();
  if(/^cancel|^back|^nevermind$/.test(s)){
    print('scrapped.', 'dim');
    state.flow = null; setPrompt('guest>');
    return;
  }

  const flow = state.flow;

  if(flow.type === 'excuse'){
    if(flow.step === 'situation'){
      flow.situation = matchFrom(kit.situations, s);
      flow.step = 'teacher';
      print(`got it — ${flow.situation.name.toLowerCase()}. who do i need to convince? (strict / cool / new / tuition)`, 'sys');
    } else if(flow.step === 'teacher'){
      flow.teacher = matchFrom(kit.teachers, s);
      flow.step = 'detail';
      print(`got it — ${flow.teacher.name.toLowerCase()}. one detail, or type "random": what actually happened?`, 'sys');
    } else {
      const teacher = flow.teacher;
      const situation = flow.situation;
      state.flow = null; setPrompt('guest>');
      excuseFromAI(teacher, situation, s);
    }
    return;
  }

  if(flow.type === 'roast'){
    if(flow.step === 'marks'){
      flow.marks = parseMarks(s);
      flow.step = 'voice';
      print(`marks logged. whose voice do you want this in? (${kit.characters.map(c=>c.id).join(' / ')})`, 'sys');
    } else {
      const character = matchFrom(kit.characters, s);
      const marks = flow.marks;
      state.flow = null; setPrompt('guest>');
      roastFromAI(marks, character);
    }
  }
}

function matchFrom(list, input){
  return list.find(item => item.match.some(m => input.includes(m)) || input.includes(item.id)) || list[0];
}

function parseMarks(input){
  if(/random/.test(input)) return kit.subjects.map(()=>Math.floor(Math.random()*100));
  const nums = input.split(',')
    .map(x => parseInt(x.trim(), 10))
    .filter(n => !Number.isNaN(n));
  
  while(nums.length < kit.subjects.length) nums.push(0);
  return nums.slice(0, kit.subjects.length).map(n => Math.min(100, Math.max(0, n)));
}

async function askClaude(prompt, maxTokens){
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({
      model:"claude-sonnet-4-6",
      max_tokens: maxTokens,
      messages:[{ role:"user", content: prompt }]
    })
  });
  if(!res.ok) throw new Error(`claude responded ${res.status}`);
  const data = await res.json();
  const text = (data.content || []).map(b => b.text || '').join('').trim();
  if(!text) throw new Error('empty response');
  return text;
}

async function excuseFromAI(teacher, situation, detail){
  await print('analyzing your situation…', 'dim');
  const situationLabel = situation ? situation.name.toLowerCase() : 'a school-related problem';
  const prompt =
    `You are writing a short, believable excuse for a student to give a teacher.\n` +
    `Category of problem: ${situationLabel} (this could be missed homework, arriving late, being absent, ` +
    `doing badly on or missing a test, a uniform/ID issue, forgetting an item, or something else school-related — ` +
    `adapt fully to whichever one applies here).\n` +
    `Teacher type: ${teacher.name} — write in a tone that would actually work on this kind of teacher.\n` +
    `What the student says actually happened: "${detail}"\n\n` +
    `Task: analyze the specific situation the student described and write ONE tight, convincing excuse paragraph ` +
    `(3-5 sentences) built around that detail and appropriate to the category above — don't default to a homework ` +
    `excuse if the category is different, and don't go generic. ` +
    `Address it as if speaking to the teacher directly ("Sir/Ma'am, ..."). ` +
    `Return ONLY the excuse paragraph, no preamble, no quotes, no labels.`;
  try{
    const text = await askClaude(prompt, 300);
    await print(text, 'out');
    fabricate([['believability', 55, 92], ['teacher suspicion', 15, 60]], ()=>{
      const reaction = pickReaction(teacher);
      print(`${teacher.name} reacts: "${reaction}"`, 'sys');
      print('type "excuse" again, or tell me what else you need.', 'dim');
    });
  } catch(err){
    print("(couldn't reach the AI — falling back to the offline version.)", 'correction');
    excuseOffline(teacher, situation, detail);
  }
}

async function roastFromAI(marks, character){
  await print('analyzing your marksheet…', 'dim');
  const avg = average(marks);
  const breakdown = kit.subjects.map((sub,i)=>`${sub}: ${marks[i]}`).join(', ');
  const prompt =
    `You are ${character.name}, reacting to a student's report card.\n` +
    `Marks by subject: ${breakdown}. Average: ${avg.toFixed(1)}%.\n\n` +
    `Task: analyze the pattern (which subjects are weak/strong, whether the average is good, ` +
    `bad, or mixed) and write ONE short, in-character reaction (1-3 sentences) that specifically ` +
    `references what stands out in these marks — don't be generic. Stay in ${character.name}'s voice/personality. ` +
    `Return ONLY the reaction line, in quotes, no labels, no extra commentary.`;
  try{
    const text = await askClaude(prompt, 200);
    await print(`${character.name}: ${text}`, 'out');
    fabricate([['sharma ji probability', 20, avg < 60 ? 85 : 30], ['ptm severity', 10, Math.max(0, 100-avg)]], ()=>{
      print(`average: ${avg.toFixed(1)}% — type "roast" again, or tell me what else you need.`, 'dim');
    });
  } catch(err){
    print("(couldn't reach the AI — falling back to the offline version.)", 'correction');
    roastOffline(marks, character);
  }
}

const average = arr => arr.reduce((a,b)=>a+b, 0) / arr.length;
const pickReaction = teacher => teacher.reactions[Math.floor(Math.random()*teacher.reactions.length)];

const ROAST_TIERS = [[95,'legendary'], [80,'solid'], [60,'average'], [40,'poor'], [0,'bad']];

function excuseOffline(teacher, situation, detail){
  const sid = situation ? situation.id : 'homework';
  const tpl = kit.excuseTemplates[sid];

  let para;
  if(!tpl){
    
    const c1 = biasedPick(kit.excuseCol1, detail);
    const c2 = kit.excuseCol2[Math.floor(Math.random()*kit.excuseCol2.length)];
    const c3 = kit.excuseCol3[Math.floor(Math.random()*kit.excuseCol3.length)];
    para = `Sir/Ma'am, due to ${c1.toLowerCase()}, my ${c2}. Because of this, ${c3}. ` +
           `I assure you this is the genuine reason and I will submit the work as soon as possible.`;
  } else {
    const c1 = biasedPick(tpl.c1, detail);
    const c2 = tpl.c2[Math.floor(Math.random()*tpl.c2.length)];
    const c3 = tpl.c3[Math.floor(Math.random()*tpl.c3.length)];
    para = `Sir/Ma'am, ${c1.toLowerCase()}, so ${c2}. I want you to know ${c3}.`;
  }

  print(para, 'out');
  fabricate([['believability', 55, 92], ['teacher suspicion', 15, 60]], ()=>{
    print(`${teacher.name} reacts: "${pickReaction(teacher)}"`, 'sys');
    print('type "excuse" again, or tell me what else you need.', 'dim');
  });
}

function biasedPick(list, detail){
  const d = detail.toLowerCase();
  const hit = list.find(item =>
    item.toLowerCase().split(' ').some(w => w.length > 3 && d.includes(w))
  );
  return hit || list[Math.floor(Math.random()*list.length)];
}

function roastOffline(marks, character){
  const avg = average(marks);
  const tier = ROAST_TIERS.find(([min]) => avg >= min)[1];
  const pool = kit.roastResponses[character.id][tier];
  const line = pool[Math.floor(Math.random()*pool.length)];
  print(`${character.name}: "${line}"`, 'out');
  fabricate([['sharma ji probability', 20, avg < 60 ? 85 : 30], ['ptm severity', 10, Math.max(0, 100-avg)]], ()=>{
    print(`average: ${avg.toFixed(1)}% — type "roast" again, or tell me what else you need.`, 'dim');
  });
}

function fabricate(pairs, done){
  print('verifying with school server…', 'dim');
  const rows = pairs.map(([label]) =>
    printHTML(`<span class="fab-bar">${label}: <span class="fab-num">—</span></span>`, 'out')
  );

  let ticks = 0;
  const iv = setInterval(()=>{
    ticks++;
    
    pairs.forEach(([label, lo, hi], i)=>{
      const v = Math.floor(lo + Math.random()*(hi-lo));
      rows[i].innerHTML = `<span class="fab-bar">${label}: <span class="fab-num">${v}%</span></span>`;
    });
    if(ticks < 6) return;

    clearInterval(iv);
    pairs.forEach(([label, lo, hi], i)=>{
      const v = Math.floor((lo+hi)/2 + (Math.random()*8 - 4));
      rows[i].innerHTML = `<span class="fab-bar">${label}: <span class="fab-num">${v}%</span> [locked]</span>`;
    });
    
    if(!state.firstFabDone){
      state.firstFabDone = true;
      print('(there is no server. there was never a server. these numbers are made up on the spot, same as your excuse.)', 'correction');
    }
    if(done) done();
  }, 120);
}

function toggleFunk(){
  const sys   = document.getElementById('system');
  const disco = document.getElementById('funkDisco');
  const btn   = document.getElementById('funkBtn');

  state.funkOn = !state.funkOn;
  sys.classList.toggle('funk-mode', state.funkOn);
  if(disco) disco.hidden = !state.funkOn;

  if(state.funkOn){
    funkBeat.start();
    if(btn){ btn.classList.add('on'); btn.textContent = '🕺 funk mode: on'; btn.setAttribute('aria-pressed','true'); }
    print('🕺 funk mode engaged — background\'s glowing, beat\'s locked in. type "funk" again to kill the groove.', 'sys');
  } else {
    funkBeat.stop();
    if(btn){ btn.classList.remove('on'); btn.textContent = '🕺 funk mode'; btn.setAttribute('aria-pressed','false'); }
    print('funk mode off. back to phosphor green.', 'dim');
  }
}

function togglePanic(){
  const cover = document.getElementById('panicCover');
  const sys = document.getElementById('system');

  if(!state.panicShown){
    if(state.funkOn) funkBeat.stop(); 
    sfx.play('slam');
    cover.innerHTML = kit.covers[Math.floor(Math.random()*kit.covers.length)]();
    cover.hidden = false;
    
    cover.style.animation = 'none'; void cover.offsetWidth; cover.style.animation = 'screenShake 0.32s linear';
    state.panicShown = true;
    document.getElementById('funkBtn').style.display = 'none';
  } else {
    sfx.play('key');
    cover.hidden = true;
    sys.classList.remove('crt-on'); void sys.offsetWidth; sys.classList.add('crt-on');
    state.panicShown = false;
    document.getElementById('funkBtn').style.display = '';
    if(state.funkOn) funkBeat.start();
  }
}

let panicNoteLeft = false;
function queuePanicNote(){
  if(panicNoteLeft) return;
  panicNoteLeft = true;
  print('(there was no progress to save. there is only hiding.)', 'correction');
}

document.addEventListener('DOMContentLoaded', ()=>{
  armCover();
  startCursorDust();

  document.getElementById('escHint').addEventListener('click', openKit);

  document.querySelectorAll('.tool-card').forEach(card=>{
    
    card.addEventListener('pointermove', e=>{
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--card-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--card-y', `${e.clientY - rect.top}px`);
    });
    card.addEventListener('click', ()=>{
      sfx.play('beep');
      runCard(card.dataset.command);
    });
  });

  const input = document.getElementById('termInput');
  const row = document.getElementById('termInputRow');
  let flashTimer = null;
  input.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
      const v = input.value.trim();
      input.value = '';
      if(!v) return;
      sfx.play('key');
      handleInput(v);
      return;
    }
    
    if(e.key.length === 1 || e.key === 'Backspace'){
      sfx.play('key');
      row.classList.add('typing-flash');
      clearTimeout(flashTimer);
      flashTimer = setTimeout(()=>row.classList.remove('typing-flash'), 120);
    }
  });

  document.getElementById('signalStatus').addEventListener('click', ()=>{
    print('(there is no signal. this is a static file.)', 'correction');
  });
  document.getElementById('panicBtn').addEventListener('click', ()=>{ queuePanicNote(); togglePanic(); });
  document.getElementById('funkBtn').addEventListener('click', toggleFunk);

  const panic = document.getElementById('panicCover');
  let pTimer = null;
  panic.addEventListener('pointerdown', ()=>{ pTimer = setTimeout(togglePanic, 700); });
  panic.addEventListener('pointerup',   ()=>{ clearTimeout(pTimer); });
});