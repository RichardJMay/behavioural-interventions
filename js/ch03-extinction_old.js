// ch03-extinction.js
// Programmed Instruction: Function-Based Extinction Procedures
// BACB Task List Aligned | 63 Frames
// Sections: Defining Extinction | Functional Variations | Response Patterns | 
//           Resistance to Extinction | Factors Affecting Efficacy | Practical Guidelines

window.PI_FRAMES = {

  // ── SECTION 1: Defining Extinction ────────────────────────────────────────

  "e1": {
    section: "Section 1: Defining Extinction",
    stem: "Withholding reinforcement for a previously reinforced behaviour decreases the rate of that behaviour. This is known as ___________.",
    acceptable: ["extinction"],
    feedback: "Extinction is simultaneously a procedure, a process, and a principle in behaviour analysis. All three uses of the term refer to the relationship between withholding reinforcement and decreasing response rate."
  },

  "e2": {
    stem: "As a behaviour change <em>procedure</em>, extinction involves providing ___________ probability of reinforcement for the target behaviour.",
    acceptable: ["zero", "0"],
    feedback: "As a procedure, extinction means zero probability of reinforcement — reinforcement is completely withheld, not merely reduced."
  },

  "e3": {
    stem: "As a behavioural <em>process</em>, extinction refers to the ___________ rate of a previously reinforced behaviour when that behaviour no longer produces reinforcement.",
    acceptable: ["diminishing", "decreasing", "declining", "reducing", "reduced", "decresased"],
    feedback: "The process of extinction is the observable decrease in responding. The procedure (withholding reinforcement) produces the process (diminishing response rate)."
  },

  "e4": {
    stem: "As a <em>principle</em>, extinction refers to the functional ___________ between withholding reinforcement for a previously reinforced behaviour and the resultant diminishing rate of response.",
    acceptable: ["relation", "relationship"],
    feedback: "The principle of extinction is the functional relation — the reliable, lawful relationship between the operation (withholding reinforcement) and its effect (decreased responding)."
  },

  "e5": {
    stem: "A functional behaviour assessment enables practitioners to distinguish between <em>procedural</em> variations of extinction (e.g., ignoring) and <em>functional</em> variations of extinction, which involve identifying the ___________ maintaining the behaviour.",
    acceptable: ["specific reinforcer", "reinforcer", "maintaining reinforcer"],
    feedback: "Functional variations of extinction require identifying the specific reinforcer — not just applying a generic 'ignore it' approach. Different maintaining reinforcers require different forms of extinction."
  },

  "e6": {
    label: "DISCRIMINATION FRAME",
    stem: "Which of the following is NOT extinction? (a) withholding a reinforcer for a previously reinforced behaviour; (b) a decrease in behaviour caused by fatigue; (c) the diminishing response rate under an extinction procedure.",
    acceptable: ["b", "fatigue", "not extinction"],
    feedback: "(b) — extinction refers specifically to response reduction produced by withholding reinforcement. Decreases due to fatigue, satiation, or forgetting are not extinction. Extinction is defined by the response–reinforcer relationship, not by the topography of the outcome."
  },

  "e7": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner delivers reinforcement on a noncontingent fixed-time schedule. Does NCR involve extinction? Answer yes or no.",
    acceptable: ["no"],
    feedback: "No — NCR is not extinction. NCR delivers reinforcement regardless of behaviour; extinction withholds it. They operate on different principles: NCR functions as an AO; extinction disrupts the response–reinforcer contingency."
  },

  // ── SECTION 2: Functional Variations of Extinction ────────────────────────

  "e8": {
    section: "Section 2: Functional Variations of Extinction",
    stem: "The form that extinction takes depends on the ___________ of the problem behaviour — that is, what reinforcer is maintaining it.",
    acceptable: ["function", "maintaining reinforcer"],
    feedback: "This is the core principle of function-based extinction: the procedure must match the function. Identifying the maintaining reinforcer through functional assessment is therefore the critical first step."
  },

  "e9": {
    stem: "Behaviours maintained by ___________ reinforcement are placed on extinction when those behaviours no longer produce the reinforcer (e.g., withholding attention when attention-maintained behaviour occurs).",
    acceptable: ["positive", "socially mediated positive"],
    feedback: "Positive reinforcement extinction: the positive reinforcer (e.g., attention, tangibles, access to preferred items) is withheld when the problem behaviour occurs. The behaviour no longer produces the reinforcer."
  },

  "e10": {
    stem: "A person's stealing items is maintained by access to those items items. Extinction consists of ___________ item when stealing occurs.",
    acceptable: ["withholding", "not providing", "no longer providing", "removing access to"],
    feedback: "Withholding the items — the stealing no longer produces the positive reinforcer. This is the correct form of extinction for positively reinforced behaviour."
  },

  "e11": {
    stem: "Behaviours maintained by negative reinforcement are placed on ___________ extinction, in which the problem behaviour no longer produces removal of the stimulus.",
    acceptable: ["escape", "escape extinction"],
    feedback: "The student can no longer escape or avoid the stimulus (e.g., exam) by engaging in the problem behaviour. The examination continues despite the problem behaviour."
  },

  "e12": {
    stem: "During escape extinction, the instructional demand is ___________ despite the occurrence of the challenging behaviour.",
    acceptable: ["continued", "maintained", "kept in place", "not removed"],
    feedback: "Continued presentation of the aversive stimulus is what defines escape extinction. The problem behaviour no longer produces escape — the contingency between problem behaviour and escape is disrupted."
  },

  "e13": {
    label: "DISCRIMINATION FRAME",
    stem: "A teacher removes access to the internet for students who have been historically checking their social media in class. Is this extinction for attention-maintained social media use? Answer yes or no.",
    acceptable: ["yes"],
    feedback: "Yes — witholding access to the maintaining reinforcer would be an example of extinction." 
  },

  "e14": {
    stem: "Behaviours maintained by automatic <em>positive</em> reinforcement are placed on extinction by masking or ___________ the sensory consequence that reinforces the behaviour.",
    acceptable: ["removing", "eliminating", "blocking"],
    feedback: "Sensory extinction for automatically positively reinforced behaviour involves removing or attenuating the sensory product of the behaviour — for example, using gloves to mask sensory feedback of table tapping."
  },

  "e15": {
    stem: "The term ___________ extinction is used when the automatic reinforcement produced by the behaviour is masked or removed, even though the term is technically a misnomer because it is the behaviour-producing reinforcement that is extinguished, not the sensory reinforcement itself.",
    acceptable: ["sensory"],
    feedback: "Sensory extinction — the term is in widespread use despite being a misnomer. The behaviour is extinguished by removing its automatic sensory reinforcement, not by eliminating the sensory reinforcement itself from the environment."
  },


  // ── SECTION 3: Response Patterns Associated with Extinction ───────────────

  "e16": {
    section: "Section 3: Response Patterns Associated with Extinction",
    stem: "Behaviours undergoing extinction are commonly associated with characteristic changes in the occurrence and ___________ of response.",
    acceptable: ["topography", "form"],
    feedback: "Extinction produces changes not only in response frequency but also in response topography — novel or varied forms of the behaviour may emerge. Practitioners should anticipate both."
  },

  "e17": {
    stem: "The temporary increase in the frequency, intensity, or duration of a target response that can occur at the onset of extinction is called an extinction ___________.",
    acceptable: ["burst"],
    feedback: "Extinction burst — a temporary worsening of the behaviour before it decreases. This is one of the most clinically significant side effects of extinction and a common reason caregivers abandon extinction procedures prematurely."
  },

  "e18": {
    stem: "Extinction bursts are clinically significant for two reasons: first, an increase in intensity may produce greater ___________ or destruction if the behaviour is dangerous; second, caregivers may abandon the intervention during the burst.",
    acceptable: ["injury", "harm"],
    feedback: "Both reasons highlight the importance of preparing caregivers before implementing extinction: they must anticipate the burst and persist with the procedure despite the temporary worsening."
  },

  "e19": {
    stem: "Research suggests that extinction bursts are ___________ as prevalent as once believed in applied contexts, particularly when extinction is combined with other procedures such as differential reinforcement.",
    acceptable: ["not as", "less", "not"],
    feedback: "Published data suggest extinction bursts occurred in 36% of cases when extinction was used in isolation, but in only 12% of cases when combined with other procedures. Extinction bursts are a real risk but not an inevitable outcome."
  },

  "e20": {
    stem: "An increased tendency for novel or diverse behaviours to occur during extinction is called extinction-induced response ___________.",
    acceptable: ["variation", "variability"],
    feedback: "Response variation — new forms of behaviour emerge when the established form no longer produces reinforcement. This can be desirable (if appropriate alternative behaviours emerge) or undesirable (if other problem behaviours emerge)."
  },

  "e21": {
    stem: "Response variation during extinction can be <em>desirable</em> if it produces successive approximations of appropriate behaviour that a practitioner can ___________ reinforce to shape the target behaviour.",
    acceptable: ["differentially", "selectively"],
    feedback: "Desirable response variation — novel appropriate behaviours emerge and can be differentially or selectively reinforced. This is one mechanism through which shaping can occur naturally during extinction."
  },

  "e22": {
    stem: "The reemergence of previously extinguished behaviour after a period away from the context in which extinction was implemented is called ___________ recovery.",
    acceptable: ["spontaneous"],
    feedback: "Spontaneous recovery — the extinguished behaviour reappears at the start of a new session or after a break. It does not mean extinction has failed; each successive occurrence should be at a lower magnitude and extinguish more quickly."
  },

  "e23": {
    stem: "Spontaneous recovery is important practically because caregivers may interpret the reemergence of behaviour as evidence that extinction ___________, and may abandon the procedure.",
    acceptable: ["failed", "is not working", "doesn't work"],
    feedback: "Caregivers must be informed to expect spontaneous recovery before extinction begins. Each recurrence should be lower in magnitude and extinguish more quickly than the last — this is the expected pattern, not a failure."
  },

  "e24": {
    stem: "The reemergence of a previously reinforced problem behaviour when reinforcement for an alternative behaviour is reduced or terminated is called ___________.",
    acceptable: ["resurgence"],
    feedback: "Resurgence — distinct from spontaneous recovery. Resurgence occurs specifically when reinforcement for the alternative behaviour (e.g., in DRA or FCT) is weakened or discontinued. The problem behaviour re-emerges as a function of the change in the alternative behaviour's reinforcement."
  },

  "e25": {
    label: "DISCRIMINATION FRAME",
    stem: "A learner's problem behaviour was reduced to zero through extinction. After a week-long holiday break, the behaviour reappears at the start of the first session back. This is an example of ___________ recovery, not treatment failure.",
    acceptable: ["spontaneous"],
    feedback: "Spontaneous recovery — the behaviour reappears after a period away from the extinction context. This is an expected behavioural phenomenon. The practitioner should continue implementing extinction; the behaviour should extinguish again more quickly."
  },

  "e26": {
    label: "DISCRIMINATION FRAME",
    stem: "A learner's problem behaviour was successfully reduced through DRA. The DRA reinforcement schedule is thinned, and the problem behaviour re-emerges. Is this spontaneous recovery or resurgence?",
    acceptable: ["resurgence"],
    feedback: "Resurgence — the problem behaviour re-emerges as a function of the reduction in reinforcement for the alternative behaviour. Spontaneous recovery occurs after a period of time away from the extinction context; resurgence occurs as a direct result of changes to the alternative behaviour's reinforcement contingency."
  },

  "e27": {
    label: "REVIEW",
    stem: "An increased tendency for novel or diverse forms of behaviour to emerge during extinction is called extinction-induced response ___________.",
    acceptable: ["variation"],
    feedback: "Response variation — new topographies emerge when the established form no longer produces reinforcement. This can be desirable or undesirable depending on what new behaviours emerge."
  },

  "e28": {
    label: "REVIEW",
    stem: "The reemergence of a previously reinforced problem behaviour when reinforcement for an alternative behaviour is reduced or terminated is called ___________.",
    acceptable: ["resurgence"],
    feedback: "Resurgence — distinct from spontaneous recovery. It is triggered by changes to the alternative behaviour's reinforcement contingency, not by the passage of time."
  },

  "e29": {
    label: "REVIEW",
    stem: "The emergence of ___________ during extinction is a well-documented side effect that practitioners must anticipate by conducting a risk assessment",
    acceptable: ["aggression", "extinction-induced aggression"],
    feedback: "Extinction-induced aggression — documented in both basic and applied research. Proactive planning before extinction begins is a clinical requirement, not an afterthought."
  },

  // ── SECTION 4: Resistance to Extinction ──────────────────────────────────

  "e30": {
    section: "Section 4: Resistance to Extinction",
    stem: "Behaviour that continues to occur during extinction has greater ___________ to extinction than behaviour that diminishes quickly.",
    acceptable: ["resistance"],
    feedback: "Resistance to extinction is a relative concept — it describes the persistence of responding during extinction. Higher resistance means the behaviour takes longer to extinguish."
  },

  "e31": {
    stem: "Behaviour maintained on an ___________ schedule of reinforcement generally shows greater resistance to extinction than behaviour maintained on a continuous reinforcement (CRF) schedule.",
    acceptable: ["intermittent", "variable"],
    feedback: "The partial-reinforcement extinction effect — behaviour reinforced only some of the time is more resistant to extinction than behaviour reinforced every time. This is clinically important: problem behaviours that have been intermittently reinforced will be harder to extinguish."
  },

  "e32": {
    stem: "Of the schedule types, ___________ schedules (e.g., VR, VI) tend to produce greater resistance to extinction than fixed schedules (e.g., FR, FI).",
    acceptable: ["variable"],
    feedback: "Variable schedules produce greater resistance to extinction than fixed schedules. VR and VI schedules produce unpredictable reinforcement, which makes it more difficult for the organism to discriminate that extinction is in effect."
  },

  "e33": {
    stem: "In general, the ___________ the intermittent schedule of reinforcement, the greater the resistance to extinction will be.",
    acceptable: ["thinner", "leaner", "more intermittent"],
    feedback: "Thinner schedules (fewer reinforcers per response, or longer intervals between reinforcers) produce more resistant behaviour. Problem behaviour that has been reinforced rarely but unpredictably may be extremely resistant to extinction."
  },

  "e34": {
    stem: "Resistance to extinction is likely to increase with the strength of the ___________ operation (EO) for the reinforcer being withheld.",
    acceptable: ["establishing", "eo"],
    feedback: "A strong EO increases the value of the reinforcer and the frequency of behaviour that has produced it. When extinction is implemented under a strong EO, the organism is highly motivated to obtain the reinforcer — increasing resistance."
  },

  "e35": {
    stem: "The number, ___________, and quality of the reinforcer during baseline may affect resistance to extinction.",
    acceptable: ["magnitude"],
    feedback: "Reinforcer parameters — number, magnitude, and quality — all influence resistance to extinction. More numerous, larger, or higher-quality reinforcers during baseline tend to produce greater resistance."
  },

  "e36": {
    stem: "Response ___________ — how much physical effort the behaviour requires — is likely to influence resistance to extinction. High-effort behaviours may extinguish more quickly.",
    acceptable: ["effort"],
    feedback: "Response effort affects resistance to extinction. High-effort behaviours are more likely to extinguish quickly because the cost-to-benefit ratio becomes unfavourable when reinforcement is no longer available."
  },

  "e37": {
    label: "REVIEW",
    stem: "Behaviour maintained on an intermittent schedule is more resistant to extinction than behaviour on CRF. The more ___________ the intermittent schedule, the greater the resistance.",
    acceptable: ["thin", "thinner", "lean", "leaner"],
    feedback: "Thinner intermittent schedules produce greater resistance to extinction — the partial-reinforcement extinction effect. Behaviour reinforced rarely and unpredictably is hardest to extinguish."
  },

  "e38": {
    label: "REVIEW",
    stem: "A strong ___________ operation for the withheld reinforcer increases resistance to extinction because the organism is highly motivated to obtain the reinforcer.",
    acceptable: ["establishing", "eo"],
    feedback: "A strong EO increases the current value of the reinforcer being withheld, increasing the motivation to keep responding during extinction — increasing resistance."
  },

  "e39": {
    label: "REVIEW",
    stem: "High response ___________ tends to reduce resistance to extinction, because the effort required to emit the behaviour becomes disproportionate when it no longer produces reinforcement.",
    acceptable: ["effort"],
    feedback: "Response effort — high-effort behaviours are more likely to extinguish quickly. When the cost-to-benefit ratio becomes unfavourable, responding is less likely to persist."
  },

  "e40": {
    label: "DISCRIMINATION FRAME",
    stem: "Two learners have problem behaviour maintained by attention. Learner A's behaviour was reinforced on a CRF schedule; Learner B's was reinforced on a VR5 schedule. Whose behaviour is likely to persist for longer?",
    acceptable: ["learner b", "b", "vr5", "variable"],
    feedback: "Learner B — behaviour maintained on a variable ratio schedule is more resistant to extinction than behaviour maintained on CRF, due to the partial-reinforcement extinction effect and the unpredictability of the reinforcement history."
  },

  // ── SECTION 5: Factors Influencing Efficacy of Extinction ─────────────────

  "e41": {
    section: "Section 5: Factors That Influence the Efficacy of Extinction",
    stem: "Several factors influence how effectively extinction reduces problem behaviour. The first and most important is ___________ the operant function of the problem behaviour.",
    acceptable: ["identifying", "identification of", "finding", "discovering", "determining"],
    feedback: "Identifying the function is the critical first step — it determines which form of extinction is required. Without this, there is a high risk of applying the wrong form of extinction."
  },

  "e42": {
    stem: "The baseline schedule of reinforcement affects extinction efficacy because behaviour maintained on a ___________ schedule is more persistent during extinction.",
    acceptable: ["intermittent", "variable", "thin"],
    feedback: "Baseline schedule history determines resistance to extinction. Practitioners should account for this when planning extinction — behaviour with a long intermittent reinforcement history will require more extinction trials and longer implementation."
  },

  "e43": {
    stem: "The delay to reinforcement during baseline also affects extinction efficacy. Behaviour is more resistant to extinction when baseline delays to reinforcement were ___________ and variable.",
    acceptable: ["unpredictable", "long", "longer"],
    feedback: "Unpredictable, variable delays to reinforcement during baseline increase resistance to extinction. Conversely, constant and predictable delays produce less resistance."
  },

  "e44": {
    stem: "Extinction is more effective when it is combined with ___________ for appropriate or alternative behaviour, because this shifts responding from the problem behaviour to the alternative.",
    acceptable: ["reinforcement", "differential reinforcement"],
    feedback: "Extinction combined with reinforcement — consistent with the matching law — reduces the relative rate of reinforcement for the problem behaviour while increasing it for appropriate behaviour. Research shows this combination reduces extinction bursts and produces more durable change."
  },

  "e45": {
    stem: "Signalled extinction — using a clear stimulus to indicate when extinction is in effect — produces ___________ suppression of problem behaviour compared to unsignalled extinction.",
    acceptable: ["more", "greater", "faster", "more immediate"],
    feedback: "Signalled extinction enables the learner to discriminate when reinforcement is unavailable, producing faster and more complete suppression. Multiple schedules with signalled extinction components have been used effectively in applied settings."
  },

  "e46": {
    stem: "Treatment integrity failures during extinction alone are likely to have a ___________ effect on treatment, because failures create intermittent reinforcement of the problem behaviour.",
    acceptable: ["detrimental", "negative", "harmful"],
    feedback: "Treatment integrity failures during extinction create an intermittent-reinforcement schedule, which increases resistance to extinction. This makes the problem behaviour harder to extinguish and highlights the clinical importance of consistent implementation."
  },

  "e47": {
    label: "REVIEW",
    stem: "The single most important factor influencing extinction efficacy is first ___________ the operant function of the behaviour, so the correct form of extinction can be implemented.",
    acceptable: ["identifying", "identification of", "finding", "discovering", "determining"],
    feedback: "Identifying function is the critical first step. Applying the wrong form of extinction — because the function was not assessed — is one of the most common clinical errors."
  },

  "e48": {
    label: "REVIEW",
    stem: "Treatment integrity failures during extinction create an ___________ reinforcement schedule, which increases resistance to extinction and undermines treatment.",
    acceptable: ["intermittent", "variable"],
    feedback: "Treatment integrity failures inadvertently create partial or intermittent reinforcement — making the behaviour more resistant to extinction. Consistent implementation across all caregivers and settings is therefore essential."
  },


  // ── SECTION 7: When Not to Use Extinction ─────────────────────────────────

  "e49": {
    section: "Section 7: When Not to Use Extinction",
    stem: "Extinction should rarely be used as a singular intervention but particularly when the target behaviour is ___________, because of the risks of extinction bursts, variability or other side effects that pose an immediate risk",
    acceptable: ["harmful", "dangerous", "life-threatening", "self-injurious"],
    feedback: "Harmful or dangerous behaviour requires more proactive planning than the use of extinction alone. An extinction burst in the context of dangerous behaviour could be life-threatening."
  },

  "e50": {
    stem: "Extinction should be avoided used when all sources of ___________ for the problem behaviour cannot be withheld, because of the impact of partial reinforcement",
    acceptable: ["reinforcement"],
    feedback: "If the practitioner cannot control all sources of reinforcement (e.g., in a classroom where peers may attend to the behaviour), extinction cannot be implemented with integrity. The intermittent reinforcement that results will increase resistance."
  },

  "e51": {
    stem: "Extinction should not be used as a singular intervention when a ___________ reduction in behaviour is required.",
    acceptable: ["rapid", "immediate", "quick"],
    feedback: "Extinction produces gradual reduction. When rapid suppression is needed other procedures (e.g., combined with reinforcement) that produce faster suppression should be considered."
  },

  "e52": {
    stem: "Extinction should not be used when others are likely to ___________ the problem behaviour, because observation of extinction-increased behaviour may prompt imitation.",
    acceptable: ["imitate", "copy", "model"],
    feedback: "In group settings, other individuals observing the extinction burst or intensified problem behaviour may imitate it. This is a particular concern in classrooms, residential settings, or any context with multiple learners."
  },

  // ── SECTION 8: Function-Based Extinction in Practice ─────────────────────

  "e53": {
    section: "Section 8: Function-Based Extinction in Practice",
    stem: "A functional analysis reveals that a learner's problem behaviour is maintained by peer attention. The teacher ignoring the behaviour is likely to be an effective use of extinctinon - true or false? ",
    acceptable: ["false"],
    feedback: "Withholding social attention will only work if the source of the attention is that which actually maintains the behaviour (which here, is peers)"
  },

  "e54": {
    stem: "When extinction cannot be implemented with high integrity — for example, because it is physically impossible to withhold automatic reinforcement — an alternative approach is to minimise reinforcement for problem behaviour and ___________ reinforcement for appropriate behaviour.",
    acceptable: ["maximise", "increase", "maximise/increase"],
    feedback: "When pure extinction is not feasible, the practitioner can reduce the differential between reinforcement for problem behaviour and reinforcement for appropriate behaviour — effectively implementing a less-than-perfect concurrent schedule that still favours appropriate behaviour."
  },

  "e55": {
    stem: "The relationship between extinction and motivating operations is clinically important. Extinction may be ___________ as an intervention for escape-maintained behaviour if the tasks or demands are excessively harsh or not matched to the learner's abilities.",
    acceptable: ["inappropriate", "contraindicated", "not appropriate"],
    feedback: "If the MO for escape is aberrant — tasks that are too difficult, aversive, or inappropriate — the clinically appropriate response is to modify the tasks, not to implement escape extinction. Extinction without addressing the MO may be both ineffective and ethically questionable."
  },

  // ── SECTION 9: Integration ─────────────────────────────────────────────────

  "e56": {
    section: "Section 9: Integration",
    stem: "A learner's problem behaviour is maintained by attention. The practitioner begins extinction (withholding attention). During the first session, the problem behaviour increases temporarily in frequency and intensity. This is an extinction ___________.",
    acceptable: ["burst"],
    feedback: "Extinction burst — the temporary increase in responding at the onset of extinction. The practitioner should persist with extinction and prepare caregivers to expect this pattern."
  },

  "e57": {
    stem: "The extinction programme for the learner is going well. After a two-week school holiday, the behaviour re-emerges at the start of the first session. This is ___________ recovery.",
    acceptable: ["spontaneous"],
    feedback: "Spontaneous recovery — the extinguished behaviour reappears after a period away from the extinction context. The practitioner should continue extinction; the behaviour should extinguish again more quickly."
  },

  "e58": {
    stem: "To reduce the risk of extinction bursts and improve treatment outcomes, the practitioner should ___________ extinction with attention-contingent DRA, so the learner has an appropriate way to access attention.",
    acceptable: ["combine", "supplement"],
    feedback: "Combining extinction with DRA provides an appropriate alternative for reinforcement access, reduces the likelihood of extinction bursts, and produces more durable outcomes than extinction alone."
  },

  "e59": {
    stem: "A learner's problem behaviour was maintained on a VR10 schedule before extinction was implemented. The practitioner should expect this behaviour to show ___________ resistance to extinction compared to behaviour that was on CRF.",
    acceptable: ["greater", "higher", "more"],
    feedback: "Greater resistance — VR schedules produce higher resistance to extinction than CRF due to the partial-reinforcement extinction effect. More extinction trials and more consistent implementation will be required."
  },

  "e60": {
    label: "INTEGRATION FRAME",
    stem: "A behaviour analyst is planning extinction for escape-maintained aggression in a classroom. The first step is to confirm the escape function via ___________ before implementing escape extinction.",
    acceptable: ["functional analysis", "functional assessment", "functional behaviour assessment", "fba"],
    feedback: "Functional analysis or FBA first — escape extinction is only appropriate if escape is confirmed as the maintaining reinforcer. Applying the wrong form of extinction will be ineffective."
  },

  "e61": {
    label: "INTEGRATION FRAME",
    stem: "Because response topography may change at the onset of extinction, the practitioner must plan for extinction-induced ___________ before the programme begins.",
    acceptable: ["variability"],
    feedback: "Proactive planning for variability — risk assessment, trained staff — is a clinical requirement. In a classroom setting, other students' safety must also be considered."
  },

  "e62": {
    label: "INTEGRATION FRAME",
    stem: "For extinction to be maximially effective, all caregivers across all settings must implement it ___________. This may therefore meanm that the clinician considers an alternative intervention.",
    acceptable: ["consistently"],
    feedback: "Consistent implementation across all people and settings is essential. Continuing to reinforce the behaviour creates an intermittent reinforcement schedule — increasing resistance and slowing reduction."
  },

  "e63": {
    label: "INTEGRATION FRAME",
    stem: "Signalled extinction — using a clear stimulus to indicate when extinction is in effect — produces ___________ suppression than unsignalled extinction, because the learner can discriminate when reinforcement is unavailable.",
    acceptable: ["more", "greater", "faster"],
    feedback: "Signalled extinction facilitates stimulus control — the learner learns to discriminate the extinction context. This produces faster and more complete suppression than extinction that occurs without any discriminative signal."
  }

};
