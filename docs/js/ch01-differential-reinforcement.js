// pi-frames.js
// All 88 frames for the Differential Reinforcement PI programme.
// Each frame: { id, stem, acceptable, feedback }
// 'acceptable' is an array of strings; matching is case-insensitive substring.

window.PI_FRAMES = {

  // ── SECTION 1: Foundation ──────────────────────────────────────────────────

  "f1": {
    section: "Section 1: The Foundation",
    stem: "In behaviour analysis, a consequence that increases the future frequency of a behaviour is called a ___________.",
    acceptable: ["reinforcer", "reinforcement"],
    feedback: "A reinforcer is any consequence that increases the future frequency of the behaviour it follows. This is the foundation of all differential reinforcement procedures."
  },

  "f2": {
    stem: "When a reinforcer is delivered every time a behaviour occurs, the behaviour is said to be on a ___________ schedule of reinforcement.",
    acceptable: ["continuous", "crf", "continuous reinforcement"],
    feedback: "CRF — continuous reinforcement — means every occurrence of the behaviour produces a reinforcer. This is the starting point for most reinforcement-based interventions."
  },

  "f3": {
    stem: "When reinforcement is withheld following a behaviour that was previously reinforced, the procedure is called ___________.",
    acceptable: ["extinction"],
    feedback: "Extinction involves withholding all reinforcement for a previously reinforced behaviour. Over time, extinction decreases the frequency of that behaviour."
  },

  "f4": {
    stem: "A practitioner who reinforces <em>some</em> behaviours while withholding reinforcement for <em>others</em> is using ___________ reinforcement.",
    acceptable: ["differential"],
    feedback: "The word 'differential' means the practitioner is making a distinction — reinforcing one class of behaviour and withholding reinforcement for another."
  },

  "f5": {
    stem: "Differential reinforcement has two essential components: (a) providing reinforcement contingent on a specified behaviour, and (b) ___________ reinforcement for another behaviour.",
    acceptable: ["withholding", "withdrawing", "not providing", "withhold"],
    feedback: "Both components are required. Without withholding reinforcement for the problem behaviour, the procedure is simply reinforcement — not <em>differential</em> reinforcement."
  },

  "f6": {
    stem: "A teacher praises a student for working quietly and ignores the student when she calls out. The teacher is using ___________ reinforcement.",
    acceptable: ["differential"],
    feedback: "Differential reinforcement — one behaviour (working quietly) is reinforced, and reinforcement is withheld for another (calling out)."
  },

  "f7": {
    stem: "When differential reinforcement is used to reduce problem behaviour, reinforcement is provided for a behaviour ___________ the problem behaviour, and withheld for the problem behaviour itself.",
    acceptable: ["other than", "different from", "instead of", "alternative to"],
    feedback: "The key is that reinforcement targets a behaviour <em>other than</em> the problem behaviour. The problem behaviour must be on extinction or a very lean schedule."
  },

  "f8": {
    stem: "A practitioner reinforces hand-raising and withholds reinforcement for shouting out. Both the reinforcement and the withholding are ___________ on the learner's behaviour.",
    acceptable: ["contingent"],
    feedback: "Contingent means the consequence depends on a specific behaviour occurring. Both arms of differential reinforcement — reinforcing one behaviour and withholding for another — are contingent on what the learner does."
  },

  "f9": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner delivers attention every time a student raises their hand, regardless of whether the student also calls out. Is this differential reinforcement? Answer yes or no.",
    acceptable: ["no"],
    feedback: "No — differential reinforcement requires <em>both</em> reinforcing one behaviour <em>and</em> withholding reinforcement for another. If the problem behaviour (calling out) is still being reinforced, only one component is present."
  },

 "f10": {
  label: "REVIEW",
  stem: "The first essential component of differential reinforcement is providing ___________ contingent on the target behaviour.",
  acceptable: ["reinforcement", "reinforcers"],
  feedback: "Reinforcement is provided contingent on the appropriate or alternative behaviour — this strengthens the target response."
},

"f10b": {
  label: "REVIEW",
  stem: "The second essential component of differential reinforcement is ___________ reinforcement for the problem behaviour.",
  acceptable: ["withholding", "withdrawing", "extinction"],
  feedback: "Reinforcement is withheld for the problem behaviour — without this component, there is no differential contingency and the procedure is not differential reinforcement."
},

  // ── SECTION 2: DRA ────────────────────────────────────────────────────────

  "f11": {
    section: "Section 2: Differential Reinforcement of Alternative Behaviour (DRA)",
    stem: "When a practitioner reinforces a desirable <em>alternative</em> to the problem behaviour and withholds reinforcement for the problem behaviour, the procedure is called differential reinforcement of ___________ behaviour.",
    acceptable: ["alternative"],
    feedback: "DRA = Differential Reinforcement of Alternative behaviour. The defining feature is that a specific, desirable alternative behaviour is identified and reinforced."
  },

  "f12": {
    stem: "DRA produces two simultaneous effects: the alternative behaviour is ___________, and the problem behaviour is weakened.",
    acceptable: ["strengthened", "increased", "reinforced"],
    feedback: "DRA has dual effects — the reinforced alternative strengthens, while the problem behaviour (on extinction) weakens. This is what makes DRA powerful."
  },

  "f13": {
    stem: "Imagine the problem behaviour and the alternative behaviour are each response classes competing for reinforcement. DRA deliberately arranges for the alternative behaviour to receive reinforcement at a ___________ rate than the problem behaviour.",
    acceptable: ["higher", "greater", "denser"],
    feedback: "DRA is a differential arrangement — the alternative behaviour is on a dense, high-quality schedule while the problem behaviour is on extinction or a very lean schedule."
  },

  "f14": {
    stem: "This arrangement — two behaviours available simultaneously, each with different reinforcement rates — is described as a ___________ schedule of reinforcement.",
    acceptable: ["concurrent"],
    feedback: "DRA can be conceptualised as a concurrent schedule: two response classes are operating simultaneously, each with its own reinforcement contingency."
  },

  "f15": {
    stem: "According to the matching law, when two response classes are on a concurrent schedule, the learner will allocate ___________ responding to the class that produces the higher rate of reinforcement.",
    acceptable: ["more", "proportionally more", "relatively more"],
    feedback: "The matching law predicts responding will be allocated in proportion to relative reinforcement rates. DRA exploits this by making the alternative behaviour the better 'deal.'"
  },

  "f16": {
    label: "REVIEW",
    stem: "DRA is a ___________ schedule of reinforcement in which the alternative behaviour is on a dense schedule and the problem behaviour is on extinction or a lean schedule.",
    acceptable: ["concurrent"],
    feedback: "Concurrent schedule — two response classes available simultaneously, each on different contingencies. This framing explains <em>why</em> DRA works."
  },

  "f17": {
    stem: "A special variant of DRA involves selecting an alternative behaviour that <em>cannot occur at the same time</em> as the problem behaviour. When the alternative behaviour is physically incompatible with the problem behaviour, the procedure is called differential reinforcement of ___________ behaviour.",
    acceptable: ["incompatible"],
    feedback: "DRI — Differential Reinforcement of Incompatible behaviour. It is a <em>subtype</em> of DRA, not a separate procedure. The incompatibility adds an extra layer of control."
  },

  "f18": {
    stem: "A student frequently leaves his seat during class. A practitioner reinforces sitting in the seat, because sitting and being out of seat cannot occur ___________.",
    acceptable: ["simultaneously", "at the same time", "concurrently"],
    feedback: "Sitting and being out of seat are physically incompatible — they cannot occur simultaneously. Reinforcing sitting is therefore a DRI procedure."
  },

  "f19": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner reinforces a student for working on worksheets to reduce out-of-seat behaviour. Working on worksheets and being out of seat <em>can</em> occur at the same time. Is this DRI or DRA?",
    acceptable: ["dra"],
    feedback: "DRA — the behaviours are not physically incompatible. The effectiveness of DRA does not depend on incompatibility. An alternative that occupies the learner can be sufficient."
  },

  "f20": {
    stem: "When escape from a task or demand functions as the reinforcer for the alternative behaviour, the DRA variant is called differential ___________ reinforcement of alternative behaviour (DNRA).",
    acceptable: ["negative"],
    feedback: "DNRA = Differential Negative Reinforcement of Alternative behaviour. Brief escape from the task is provided contingent on the alternative behaviour; escape extinction is applied to the problem behaviour."
  },

  "f21": {
    stem: "In a DNRA programme, brief escape is provided ___________ on the appropriate request, and escape extinction is applied to the problem behaviour.",
    acceptable: ["contingent", "contingently"],
    feedback: "In DNRA, the negative reinforcer (escape) is delivered contingent on the alternative behaviour (appropriate request). This matches the function of the problem behaviour while teaching a more appropriate response."
  },

  "f22": {
    label: "REVIEW",
    stem: "Name the DRA variant in which the alternative behaviour is physically incompatible with the problem behaviour.",
    acceptable: ["dri", "differential reinforcement of incompatible"],
    feedback: "DRI — Differential Reinforcement of Incompatible behaviour. It is a subtype of DRA in which the alternative and problem behaviour cannot co-occur."
  },

  "f23": {
    label: "REVIEW",
    stem: "Name the DRA variant in which negative reinforcement (escape) is used as the reinforcer for the alternative behaviour.",
    acceptable: ["dnra", "differential negative reinforcement"],
    feedback: "DNRA — used when the problem behaviour is escape-maintained. The same reinforcer (escape) that maintains the problem behaviour is made contingent on the appropriate alternative."
  },

  "f24": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner reinforces a student for saying 'I need a break' by providing brief escape from demands, and applies extinction to flopping on the floor. The problem behaviour is maintained by escape. Which procedure is this — DRA or DNRA?",
    acceptable: ["dnra", "dra"],
    feedback: "DNRA — the reinforcer for the alternative behaviour is negative reinforcement (escape from demands). If you answered DRA, that is partially correct — DNRA is a subtype of DRA, but the more specific label is DNRA."
  },

  // ── SECTION 3: Selecting behaviours and reinforcers ───────────────────────

  "f25": {
    section: "Section 3: Selecting the Alternative Behaviour and Reinforcer",
    stem: "When selecting an alternative behaviour for DRA, the first criterion is that the behaviour should already exist in the learner's current ___________, so it can be reinforced immediately.",
    acceptable: ["repertoire"],
    feedback: "If the alternative behaviour is not yet in the learner's repertoire, it must first be taught before DRA can begin. A behaviour already in the repertoire allows DRA to be implemented straight away."
  },

  "f26": {
    stem: "A second criterion is that the alternative behaviour should require ___________ effort than the problem behaviour — never more.",
    acceptable: ["equal or less", "less", "the same or less"],
    feedback: "Response effort is a key variable in the concurrent schedule DRA creates. If the alternative behaviour requires more effort than the problem behaviour, the learner will tend to allocate responding to the easier option — the problem behaviour."
  },

  "f27": {
    stem: "A third criterion is that the alternative behaviour must occur ___________ enough at baseline to provide frequent opportunities for reinforcement once DRA begins.",
    acceptable: ["frequently", "often", "with sufficient frequency"],
    feedback: "DRA requires the alternative behaviour to be emitted so the practitioner can reinforce it. A very low-frequency behaviour provides too few reinforcement opportunities for DRA to gain traction quickly."
  },

  "f28": {
    stem: "A fourth criterion is that the alternative behaviour should be likely to contact reinforcement in the learner's ___________ environment after the DRA schedule is thinned.",
    acceptable: ["natural", "everyday"],
    feedback: "Treatment gains must be maintained. If natural reinforcers in the learner's everyday environment will not support the alternative behaviour after the structured DRA programme ends, the behaviour is unlikely to persist."
  },

  "f29": {
    label: "REVIEW",
    stem: "One criterion for selecting an alternative behaviour for DRA is that it should already exist in the learner's ___________ repertoire .",
    acceptable: ["existing", "current", "established"],
    feedback: "Already in the repertoire — so it can be reinforced immediately without first needing to be taught from scratch."
  },

  "f29b": {
    label: "REVIEW",
    stem: "Another criterion is that the alternative behaviour should require less or ___________ effort than the problem behaviour.",
    acceptable: ["equal", "the same"],
    feedback: "Equal or less effort — if the alternative is harder than the problem behaviour, the learner will tend to allocate responding to the easier option."
  },

  "f29c": {
    label: "REVIEW",
    stem: "The third criterion is that the alternative behaviour must occur frequently enough at ___________ to provide reinforcement opportunities when DRA begins.",
    acceptable: ["baseline"],
    feedback: "Sufficient frequency at baseline — too few opportunities to reinforce the alternative behaviour means DRA gains traction slowly."
  },

  "f29d": {
    label: "REVIEW",
    stem: "Another criterion is that the alternative behaviour should be likely to contact ___________ in the learner's natural environment after the DRA schedule is thinned.",
    acceptable: ["reinforcement", "reinforcers", "reinforcement contingencies"],
    feedback: "Natural reinforcement sustainability — if natural contingencies won't maintain the behaviour after the structured programme ends, gains will not persist."
  },

  "f30": {
    stem: "To select an effective reinforcer for DRA, practitioners use stimulus ___________ assessments and functional behaviour assessments to identify consequences the learner will actually work for.",
    acceptable: ["preference", "preference and reinforcer"],
    feedback: "Stimulus preference and reinforcer assessments identify which stimuli function as reinforcers for that specific learner. Assuming something is a reinforcer without assessment is a common implementation error."
  },

  "f31": {
    stem: "The consequence that ___________ the problem behaviour prior to intervention is often the most effective reinforcer for the alternative behaviour in DRA.",
    acceptable: ["maintained", "reinforced", "was maintaining", "reinforces", "maintains", "produces"],
    feedback: "Using the same reinforcer that maintains the problem behaviour for the alternative behaviour ensures the reinforcer is potent and functionally relevant. This is why functional assessment informs reinforcer selection."
  },

  "f32": {
    stem: "Research suggests that the ___________ of reinforcer delivery matters more than reinforcement magnitude for the effectiveness of DRA.",
    acceptable: ["consistency", "consistent delivery", "immediacy", "speed"],
    feedback: "Consistent, immediate delivery is more important than how large or long the reinforcer is. The reinforcer must reliably follow every instance of the alternative behaviour, at least initially."
  },

  "f33": {
    stem: "When DRA begins, the alternative behaviour should initially be placed on a ___________ schedule (CRF) before transitioning to an intermittent schedule.",
    acceptable: ["continuous", "continuous reinforcement", "crf"],
    feedback: "CRF firmly establishes the alternative behaviour. Once it is strong, the schedule can be gradually thinned to an intermittent schedule that is more sustainable in natural environments."
  },

  "f34": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner begins a DRA programme by reinforcing the alternative behaviour on a VR5 schedule from the start, rather than CRF. Is this consistent with DRA implementation guidelines? Answer yes or no.",
    acceptable: ["no"],
    feedback: "No — DRA should begin with CRF to firmly establish the alternative behaviour before any schedule thinning. Starting with an intermittent schedule risks the alternative behaviour not gaining sufficient strength to compete with the problem behaviour."
  },

  "f35": {
    stem: "The reinforcer should be presented ___________ following each occurrence of the alternative behaviour, especially during the early stages of DRA.",
    acceptable: ["immediately", "straight away", "as soon as possible"],
    feedback: "Immediacy of reinforcer delivery is critical. Delays reduce the strength of the reinforcement contingency and risk accidentally reinforcing other behaviours that occur between the alternative behaviour and the delayed reinforcer."
  },

  "f36": {
    label: "REVIEW",
    stem: "A DRA programme uses a reinforcer identified through functional assessment, delivers it immediately on CRF, and withholds it following every instance of the problem behaviour. This describes ___________ implementation of DRA.",
    acceptable: ["full", "ideal", "optimal", "perfect"],
    feedback: "Full or ideal implementation — all key elements are in place: functionally relevant reinforcer, immediate delivery, CRF for the alternative, and extinction for the problem behaviour."
  },

  // ── SECTION 4: Extinction, Relapse, Combining ─────────────────────────────

  "f37": {
    section: "Section 4: DRA Implementation — Extinction, Relapse, and Combining Procedures",
    stem: "The effectiveness of DRA depends on the alternative behaviour receiving a ___________ rate of reinforcement than the problem behaviour.",
    acceptable: ["higher", "greater"],
    feedback: "The concurrent schedule logic of DRA means the alternative behaviour must be the better option. If the problem behaviour also contacts reinforcement, the advantage of the alternative is reduced."
  },

  "f38": {
    stem: "To maximise the reinforcement rate difference between the two response classes, during DRI and DRA the problem behaviour should ideally be placed on ___________.",
    acceptable: ["extinction"],
    feedback: "Extinction for the problem behaviour, combined with CRF for the alternative, creates the maximum differential. This is the ideal arrangement."
  },

  "f39": {
    stem: "Research by Vollmer and colleagues (1999) found that even ___________ implementation of DRA (where the alternative was not always reinforced and the problem behaviour was occasionally reinforced) could still produce behaviour change.",
    acceptable: ["partial", "imperfect", "inconsistent", "sub-optimal"],
    feedback: "Partial implementation can produce change, but full implementation always produces the strongest effects. When implementation mistakes happen in practice, the research suggests the intervention may still be effective if full implementation was established first."
  },

  "f40": {
    stem: "The reoccurrence of a previously reinforced problem behaviour when reinforcement for the alternative behaviour is reduced or terminated is called ___________.",
    acceptable: ["resurgence"],
    feedback: "Resurgence — a predictable phenomenon whereby the problem behaviour re-emerges when the DRA contingency is weakened"
  },

  "f41": {
    stem: "Resurgence is most likely when: (a) the reinforcement schedule for the alternative behaviour is ___________; (b) treatment shifts to a new setting; or (c) new caregivers begin working with the client.",
    acceptable: ["thinned", "reduced", "weakened", "eliminated", "terminated", "ended"],
    feedback: "Weakened or ended. These three conditions all represent a disruption to the DRA contingency. Practitioners should proactively monitor for resurgence at each of these transition points."
  },

  "f42": {
    stem: "One strategy to reduce resurgence is to reinforce ___________ alternative behaviours during the DRA programme, rather than a single alternative.",
    acceptable: ["multiple", "several", "more than one", "more", "other"],
    feedback: "Reinforcing multiple alternative behaviours (i.e., Serial DRA) has been shown to reduce the proportional resurgence of the problem behaviour compared to reinforcing a single alternative."
  },

  "f43": {
    label: "DISCRIMINATION FRAME",
    stem: "A client's DRA programme is going well in the clinic. The programme is extended to the classroom with a new teacher. The practitioner should watch for ___________ of the problem behaviour.",
    acceptable: ["resurgence", "relapse", "recurrence"],
    feedback: "The shift to a new setting with a new implementer is a classic trigger for treatment relapse or resurgance. The new teacher should receive training in the DRA protocol before the extension begins."
  },

  "f44": {
    stem: "When a problem behaviour is dangerous or destructive, DRA alone is usually insufficient because DRA does not specifically provide contingent ___________ for the problem behaviour.",
    acceptable: ["consequences", "consequence"],
    feedback: "DRA operates by making the alternative behaviour more attractive — it does not directly consequate the problem behaviour. For dangerous behaviours, additional reductive procedures may be required."
  },

  "f45": {
    stem: "In cases where the problem behaviour is dangerous to an individual or others around them, DRA is typically ___________ with other reductive procedures to produce a more potent intervention.",
    acceptable: ["combined", "supplemented", "used in combination", "paired"],
    feedback: "DRA combined with other reductive procedures addresses both the positive side (reinforcing the alternative) and the suppressive side (directly consequating the problem behaviour)."
  },

  "f46": {
    label: "REVIEW",
    stem: "After DRA schedule thinning, the problem behaviour re-emerges. This predictable behavioural phenomenon is called ___________.",
    acceptable: ["resurgence"],
    feedback: "Resurgence — the re-emergence of a previously reinforced problem behaviour when reinforcement for the alternative is reduced. It is not a treatment failure; it is a predictable phenomenon requiring a protocol response."
  },

  // ── SECTION 5: DRO ────────────────────────────────────────────────────────

  "f47": {
    section: "Section 5: Differential Reinforcement of Other Behaviour (DRO)",
    stem: "Recall that DRA requires identifying a specific ___________ behaviour to reinforce. DRO does not have this requirement.",
    acceptable: ["alternative", "replacement", "functionally equivalent"],
    feedback: "DRA and DRO differ in this important way: DRA requires a specific alternative; DRO only requires the <em>absence</em> of the problem behaviour. This makes DRO more suitable when no clear alternative exists."
  },

  "f48": {
    stem: "DRO delivers reinforcement contingent on the ___________ of problem behaviour during an interval of time or at a specific moment in time.",
    acceptable: ["absence", "omission"],
    feedback: "DRO = Differential Reinforcement of <em>Other</em> behaviour. Reynolds (1961) described it as 'reinforcement for not responding.' Reinforcement is for the absence of the problem behaviour."
  },

  "f49": {
    stem: "With interval DRO, if the problem behaviour occurs at ___________ point during the interval, the interval is reset and reinforcement is postponed.",
    acceptable: ["any", "any point", "any time"],
    feedback: "Interval DRO requires the complete absence of the problem behaviour throughout the entire interval. A single occurrence resets the clock."
  },

  "f50": {
    label: "REVIEW",
    stem: "With interval DRO, what happens if the problem behaviour occurs during the interval? The interval _____________",
    acceptable: ["resets", "reset", "is postponed", "new interval"],
    feedback: "The interval resets — the learner must then go the full interval length without the problem behaviour before earning reinforcement. This is the defining contingency of interval DRO."
  },

  "f51": {
    stem: "With ___________ DRO, the practitioner checks for the presence or absence of the problem behaviour only at the <em>exact moment</em> each interval ends, not throughout the interval.",
    acceptable: ["momentary"],
    feedback: "Momentary DRO — the check is at the end-point only. The behaviour could have occurred for 95% of the interval, but if it is absent at the precise moment the interval ends, the reinforcer is delivered."
  },

  "f52": {
    label: "DISCRIMINATION FRAME",
    stem: "During a 20-second interval, a learner engages in the target behaviour for 18 of the 20 seconds but is not engaging in it at the 20th second. Under <em>interval</em> DRO, does the learner receive reinforcement? Answer yes or no.",
    acceptable: ["no"],
    feedback: "No — interval DRO requires the complete absence of the problem behaviour throughout the <em>entire</em> interval. Because the behaviour occurred at some point during the interval, the interval would have already reset."
  },

  "f53": {
    label: "DISCRIMINATION FRAME",
    stem: "Under <em>momentary</em> DRO, is there any need to reset the interval at any other time than the end of the interval? Answer yes or no.",
    acceptable: ["no"],
    feedback: "No — momentary DRO only checks at the end-point. The learner can be engaging in the problem behaviour during the rest of the interval without resulting in interval reset. This illustrates why interval DRO generally produces stronger suppression."
  },

  "f54": {
    stem: "Research indicates that interval DRO is generally ___________ effective than momentary DRO for suppressing problem behaviour.",
    acceptable: ["more"],
    feedback: "Interval DRO requires absence throughout the interval — a more demanding contingency that produces stronger suppression. Momentary DRO may be more useful for <em>maintaining</em> reductions already achieved through interval DRO."
  },

  "f55": {
    stem: "An FI-DRO schedule uses intervals of ___________ length throughout the programme.",
    acceptable: ["equal", "fixed", "the same", "constant"],
    feedback: "FI-DRO entails intervals of equal length. For example, FI-DRO 30-sec means every interval is exactly 30 seconds."
  },

  "f56": {
    stem: "A VI-DRO schedule uses intervals of ___________ lengths that average to a specified value.",
    acceptable: ["varying", "variable", "different", "varied"],
    feedback: "In VI-DRO, intervals vary in length but average to the stated value. A VI-DRO 10-sec schedule might use intervals of 2, 8, 5, 20, and 15 seconds."
  },

  "f57": {
    stem: "On a FM-DRO schedule, the practitioner checks for the problem behaviour at the end of each ___________ interval and delivers reinforcement if the behaviour is absent at that exact moment.",
    acceptable: ["fixed", "equal", "standard"],
    feedback: "FM-DRO combines fixed intervals with a momentary check. Research has found FM-DRO is generally less effective than interval DRO and should be used cautiously."
  },

  "f58": {
    stem: "On a VM-DRO schedule, the practitioner checks at the end of intervals of ___________ duration and delivers reinforcement if the problem behaviour is absent at that precise moment.",
    acceptable: ["variable", "varying", "varied"],
    feedback: "VM-DRO combines variable intervals with a momentary check. One advantage of VM-DRO over FI-DRO is that the practitioner does not need to monitor the learner continuously — only at the end of each interval."
  },

  "f59": {
  label: "REVIEW",
  stem: "In DRO, if the interval length is the same every time, the schedule is ___________ -interval DRO.",
  acceptable: ["fixed", "fi", "fixed-interval"],
  feedback: "Fixed-interval DRO (FI-DRO) uses a constant interval length. Variable-interval DRO (VI-DRO) uses intervals that vary around a mean."
},

"f59b": {
  label: "REVIEW",
  stem: "In DRO, if the absence of behaviour is checked only at the moment intervals of equal length ends rather than throughout, the schedule is ___________ -momentary DRO.",
  acceptable: ["fixed"],
  feedback: "Momentary DRO checks for the absence of behaviour only at the end-point of the interval. The interval can be either fixed (FM-DRO) or variable (VM-DRO)."
},

"f59c": {
  label: "DISCRIMINATION FRAME",
  stem: "A practitioner checks whether a behaviour is absent only at the moment a timer sounds, with intervals varying around a mean. This is ___________ -DRO.",
  acceptable: ["vm", "variable-momentary", "variable momentary"],
  feedback: "VM-DRO — variable intervals (varying around a mean) combined with momentary checking (only at the end-point). The four variants are FI, VI, FM, and VM — combining the two dimensions of interval consistency and checking method."
},

  "f60": {
    stem: "Because DRO reinforces the <em>absence</em> of the problem behaviour, whatever the learner is doing when reinforcement is delivered may be ___________ by that reinforcer.",
    acceptable: ["strengthened", "reinforced", "inadvertently reinforced"],
    feedback: "This is a key limitation of DRO. Any behaviour occurring at the moment of reinforcement may be strengthened — including other undesirable behaviours. Practitioners must monitor for this."
  },

  "f61": {
    stem: "To avoid inadvertently reinforcing other inappropriate behaviours, reinforcement should be delivered contingent on the absence of the problem behaviour <em>and</em> the absence of any other ___________ behaviours at the time.",
    acceptable: ["significant inappropriate", "undesirable", "inappropriate", "problem", "chanllenging"],
    feedback: "DRO programmes should be implemented with attention to the full behavioural context (e.g., other undesirable responses) — not just whether the target problem behaviour is absent."
  },

  "f62": {
    label: "REVIEW",
    stem: "Unlike DRA, DRO does not require identifying a specific ___________ behaviour. This can make the procedure more suited for learners with very limited repertoires.",
    acceptable: ["alternative", "replacement"],
    feedback: "As reinforcement is contingent only on the absence of problem behaviour, not on any specific appropriate response, the can offer an advantage relative to DRA or DRI"
  },

  "f62b": {
    label: "REVIEW",
    stem: "A key limitation of DRO is that it may ___________ reinforce other undesirable behaviours that happen to occur at the moment of reinforcement delivery.",
    acceptable: ["inadvertently", "accidentally"],
    feedback: "Because DRO reinforces the absence of the problem behaviour rather than a specific appropriate response, any behaviour occurring at the moment of reinforcement may be inadvertently strengthened — including other undesirable behaviours."
  },

  // ── SECTION 6: DRO Guidelines ─────────────────────────────────────────────

  "f63": {
    section: "Section 6: DRO Implementation Guidelines",
    stem: "To calculate the mean interresponse time (IRT) from baseline data, the practitioner divides the total ___________ of baseline observation by the total number of problem behaviour responses recorded.",
    acceptable: ["duration", "time", "session length"],
    feedback: "Mean IRT = total observation time ÷ total number of responses. For example, 90 responses in 30 minutes gives a mean IRT of 20 seconds (1800 ÷ 90)."
  },

  "f64": {
    stem: "The initial DRO interval should be set at or slightly ___________ the mean baseline IRT to ensure the learner contacts reinforcement frequently when the DRO contingency is first applied.",
    acceptable: ["below", "less than", "shorter than", "lower than", "lower"],
    feedback: "Setting the initial interval at or below the mean IRT means the learner is likely to earn reinforcement from the outset. Starting with too long an interval prevents contact with reinforcement and reduces effectiveness."
  },

  "f65": {
    stem: "After the initial DRO interval successfully reduces problem behaviour, the practitioner should begin to gradually increase the ___________ ___________.",
    acceptable: ["interval length", "interval time", "time period", "interval", "time"],
    feedback: "Gradual, systematic interval increases allow the learner to adjust to longer periods without the problem behaviour. Rapid increases risk a return to baseline levels."
  },

  "f66": {
    stem: "Three procedures for thinning the DRO interval are: (a) increase by a ___________ amount each time; (b) increase proportionately; or (c) base the new interval on the learner's recent mean IRT.",
    acceptable: ["constant", "fixed", "standard"],
    feedback: "All three thinning approaches share the common feature of being gradual and data-driven rather than arbitrary."
  },

  "f67": {
    stem: "When problem behaviour is substantially reduced in the treatment setting, the DRO programme should be extended to ___________ settings and times of day to promote generalisation.",
    acceptable: ["other", "natural", "additional"],
    feedback: "DRO effects must be programmed to generalise. Caregivers and teachers in natural environments must be trained to implement the DRO contingency consistently."
  },

  "f68": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner sets an initial DRO interval of 3.5 minutes for a behaviour with a mean baseline IRT of 3.8 minutes. Is this consistent with DRO implementation guidelines? Answer yes or no.",
    acceptable: ["yes"],
    feedback: "Yes — the initial interval (3.5 min) is within the mean IRT (3.8 min) during baseline. The interval should be set at or <em>below</em> the mean baseline IRT."
  },

  "f69": {
    label: "REVIEW",
    stem: "A practitioner observes 60 responses over 60 minutes of baseline. What is the mean IRT?",
    acceptable: ["60 seconds", "1 minute", "60 sec", "at or below 60", "1 min", "60s"],
    feedback: "Mean IRT = 3600 seconds ÷ 60 responses = 60 seconds. An appropriate initial DRO interval would be 60 seconds or slightly less."
  },

  "f70": {
  label: "REVIEW",
  stem: "One limitation of DRO is that it may inadvertently ___________ other undesirable behaviours that happen to occur during the interval.",
  acceptable: ["reinforce", "strengthen", "reward"],
  feedback: "Because DRO reinforces the absence of the target behaviour rather than a specific response, any behaviour occurring at the end of the interval — including other undesirable behaviours — may be reinforced."
},

"f70b": {
  label: "REVIEW",
  stem: "A second limitation of DRO is that unlike DRA or DRI, it does not require or teach a specific ___________ behaviour.",
  acceptable: ["alternative", "appropriate", "replacement"],
  feedback: "DRO is purely reductive — it specifies what the learner should not do but not what they should do instead. This makes it less habilitative than DRA or DRI, which build a specific alternative response."
},

"f70c": {
  label: "REVIEW",
  stem: "A third limitation of DRO is that at very short intervals it can be ___________ -intensive, particularly for a single practitioner managing a group setting.",
  acceptable: ["labour", "labor", "resource", "time"],
  feedback: "Short interval DRO requires continuous monitoring and frequent reinforcement delivery. In a group setting with one practitioner, this can be impractical — a consideration when selecting between DRO variants or between DRO and other procedures."
},

  // ── SECTION 7: DRL ────────────────────────────────────────────────────────

  "f71": {
    section: "Section 7: Differential Reinforcement of Low Rates (DRL)",
    stem: "Unlike DRA and DRO, which aim to eliminate or substantially reduce a problem behaviour, DRL is used to reduce the ___________ of a behaviour — without eliminating it entirely.",
    acceptable: ["rate", "frequency"],
    feedback: "DRL = Differential Reinforcement of Low rates. It is selected when the behaviour is appropriate in some contexts but occurs at an unacceptably high rate. The goal is rate or frequency reduction, not elimination."
  },

  "f72": {
    stem: "DRL is appropriate when the ___________ of the behaviour is acceptable, but the rate at which it occurs is problematic.",
    acceptable: ["form", "topography", "occurence"],
    feedback: "The key distinction for DRL: the <em>form</em> of the behaviour is not the problem, only its <em>rate</em>. Hand-raising is appropriate; hand-raising 40 times per hour is not."
  },

  "f73": {
    label: "DISCRIMINATION FRAME",
    stem: "A learner engages in self-injurious behaviour at high rates. Is DRL the appropriate procedure? Answer yes or no.",
    acceptable: ["no"],
    feedback: "No, in general DRL should never be used with self-injurious behaviours, and it should not be used when rapid suppression is needed. DRL produces gradual reduction and actually reinforces the occurrence of the behaviour (when it meets the criterion). DRA or DRO combined with other reductive procedures would be more appropriate."
  },

  "f74": {
    stem: "With ___________ DRL, reinforcement is delivered at the end of an entire session if the total number of responses during the session was at or below the criterion limit.",
    acceptable: ["full-session", "full session", "whole session", "whole-session"],
    feedback: "Full-session DRL evaluates the whole session as one window. Reinforcement is contingent on the total response count for the session being at or below the predetermined limit."
  },

  "f75": {
    stem: "With ___________ DRL, the session is divided into equal time windows, and reinforcement is delivered at the end of each window in which responding was at or below the criterion.",
    acceptable: ["interval"],
    feedback: "Interval DRL breaks the session into smaller evaluation windows. Each interval is evaluated independently, providing more frequent reinforcement opportunities than full-session DRL."
  },

  "f76": {
    stem: "With spaced-responding DRL, reinforcement follows each occurrence of the target behaviour that is separated from the previous response by a minimum ___________ time (IRT).",
    acceptable: ["interresponse", "inter-response"],
    feedback: "Spaced-responding DRL is response-by-response: each qualifying response (those with a sufficiently long IRT) produces immediate reinforcement. Responses that occur before the minimum inter-response time elapses reset the timer and do not produce reinforcement."
  },

  "f77": {
    stem: "Of the three DRL variants, ___________ DRL provides the most immediate feedback because reinforcement follows each qualifying response individually.",
    acceptable: ["spaced-responding", "spaced responding", "spaced"],
    feedback: "Spaced-responding DRL provides trial-by-trial feedback — each response either earns a reinforcer immediately (if the IRT criterion was met) or resets the timer (if not). Full-session DRL provides the least immediate feedback."
  },

  "f78": {
    stem: "Spaced-responding DRL is the variant of choice when the goal is to ___________ the rate of the behaviour to a lower level while ensuring the behaviour continues to occur.",
    acceptable: ["reduce", "decrease", "lower"],
    feedback: "Spaced-responding DRL maintains behaviour at a reduced rate — not eliminates it. Asking too many questions is a good example: the behaviour should continue, just less frequently."
  },

  "f79": {
    stem: "Full-session and interval DRL are appropriate when it is acceptable for the rate of the problem behaviour to reach ___________, or as a step toward eventual elimination.",
    acceptable: ["zero", "elimination"],
    feedback: "Full-session and interval DRL do not require the behaviour to occur for the learner to receive the reinforcer. These variants can reduce behaviour to zero. Spaced-responding DRL, by contrast, requires the behaviour to occur (meeting the IRT criterion) to produce reinforcement."
  },

  "f80": {
    stem: "To set the initial full-session DRL criterion, the practitioner uses the ___________ number of responses per session from baseline, or slightly below that value.",
    acceptable: ["mean", "average"],
    feedback: "Starting at the mean baseline rate (or slightly below) ensures the learner is likely to meet the criterion initially, making early reinforcement contact probable. This mirrors the same logic as setting initial DRO intervals."
  },

  "f81": {
    label: "REVIEW",
    stem: "A student asks for help an average of 20 times per session during baseline. A full-session DRL programme is implemented. What would be an appropriate initial criterion?",
    acceptable: ["18", "19", "20", "at or below 20", "below 20", "slightly below 20"],
    feedback: "The mean or slightly below — so approximately 18–20 responses per session. This ensures the learner earns reinforcement early in the programme while beginning to reduce the rate."
  },

  "f82": {
    stem: "When thinning a DRL schedule, changes to the response criterion or IRT should be ___________ and based on the learner's recent performance data.",
    acceptable: ["gradual", "systematic", "small", "incremental", "systematic"],
    feedback: "DRL thinning, like DRO interval thinning, must be gradual and data-driven. Rapid changes risk a return to high baseline rates."
  },

  "f83": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner needs to rapidly suppress a student's dangerous behaviour. Is DRL the procedure of first choice? Answer yes or no.",
    acceptable: ["no"],
    feedback: "No — DRL produces gradual reduction and is contraindicated when rapid suppression is needed or when the behaviour is dangerous. A more immediately effective procedure should be considered."
  },

  // ── SECTION 8: Comparison and Selection ───────────────────────────────────

  "f84": {
    section: "Section 8: Comparing and Selecting Differential Reinforcement Procedures",
    stem: "DRA reinforces a specific ___________ behaviour to replace the problem behaviour.",
    acceptable: ["alternative", "replacement"],
    feedback: "DRA targets a specific alternative — reinforcing a desirable behaviour that competes with and replaces the problem behaviour."
  },

  "f84b": {
    stem: "DRO reinforces the ___________ of the problem behaviour, rather than requiring any specific alternative response.",
    acceptable: ["absence", "omission", "non-occurrence"],
    feedback: "DRO is reinforcement for not responding — reinforcement is contingent on the problem behaviour being absent during an interval or at a moment in time."
  },

  "f84c": {
    stem: "DRL reinforces the problem behaviour itself, but only when it occurs at a sufficiently ___________ rate.",
    acceptable: ["low", "reduced"],
    feedback: "DRL is unique among differential reinforcement procedures — the problem behaviour is still reinforced, just only when it occurs infrequently enough. The goal is rate reduction, not elimination."
  },

  "f85": {
    stem: "DRO is most appropriate when the problem behaviour is severe, occurs at high rates, and the learner has ___________ alternative behaviours in their repertoire.",
    acceptable: ["few", "limited", "very few"],
    feedback: "DRO is preferred when no clear functional alternative exists. It does not require identifying or teaching an alternative behaviour, making it suitable for learners with limited repertoires."
  },

  "f86": {
    stem: "DRA is most appropriate when a functional ___________ behaviour can be identified that will serve a useful purpose in the learner's natural environment.",
    acceptable: ["alternative", "replacement"],
    feedback: "DRA is the procedure of choice when a meaningful alternative behaviour is available or can be taught. Because DRA builds a new appropriate behaviour, it is generally preferable to DRO in the long term."
  },

  "f87": {
    stem: "DRL is the procedure of choice when the problem is not the form of the behaviour but the ___________ at which it occurs.",
    acceptable: ["rate", "frequency"],
    feedback: "DRL is selected when the behaviour itself is appropriate — only its rate is problematic. If the behaviour itself is the problem, DRA or DRO would be more appropriate."
  },

  "f88": {
    label: "INTEGRATION FRAME",
    stem: "A learner has minimal communication skills. The most immediately useful initial differential reinforcement procedure is ___________, because no specific alternative behaviour needs to be taught.",
    acceptable: ["dro"],
    feedback: "DRO — reinforcement is contingent only on the absence of challenging behaviour. This is immediately applicable without requiring the learner to emit a specific communicative (or any) response first."
  },

  "f88b": {
    label: "INTEGRATION FRAME",
    stem: "Once a functionally equivalent response has been selected, transitioning from DRO to ___________, makes sense by teaching an appropriate communicative response to access attention.",
    acceptable: ["dra", "fct", "functional communication training", "dri"],
    feedback: "DRA/FCT — because it builds a functional skill that can be maintained by natural contingencies. DRO reduces the problem behaviour but does not equip the learner with an appropriate way to access reinforcement independently."
  }

};
