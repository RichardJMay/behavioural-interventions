// ch03-extinction.js
// Programmed Instruction: Function-Based Extinction Procedures
// BACB Task List Aligned | Revised Edition
// Revisions: broader clinical contexts, neuro-affirming language,
//            enhanced integration section with applied analysis frames

window.PI_FRAMES = {

  // ── SECTION 1: Defining Extinction ────────────────────────────────────────

  "e1": {
    section: "Section 1: Defining Extinction",
    stem: "Withholding reinforcement for a previously reinforced behaviour decreases the rate of that behaviour. This is known as ___________.",
    acceptable: ["extinction"],
    feedback: "Extinction is simultaneously a procedure, a process, and a principle in behaviour analysis. All three uses of the term refer to the relationship between withholding reinforcement and decreasing response rate."
  },

  "e2": {
    stem: "As a behaviour change procedure, extinction involves providing ___________ probability of reinforcement for the target behaviour.",
    acceptable: ["zero", "0"],
    feedback: "As a procedure, extinction means zero probability of reinforcement — reinforcement is completely withheld, not merely reduced."
  },

  "e3": {
    stem: "As a behavioural process, extinction refers to the ___________ rate of a previously reinforced behaviour when that behaviour no longer produces reinforcement.",
    acceptable: ["diminishing", "decreasing", "declining", "reducing", "reduced", "decreased"],
    feedback: "The process of extinction is the observable decrease in responding. The procedure (withholding reinforcement) produces the process (diminishing response rate)."
  },

  "e4": {
    stem: "As a principle, extinction refers to the functional ___________ between withholding reinforcement for a previously reinforced behaviour and the resultant diminishing rate of response.",
    acceptable: ["relation", "relationship"],
    feedback: "The principle of extinction is the functional relation — the reliable, lawful relationship between the operation (withholding reinforcement) and its effect (decreased responding)."
  },

  "e5": {
    stem: "A functional assessment enables practitioners to distinguish between procedural variations of extinction (e.g., ignoring) and functional variations, which involve identifying the ___________ maintaining the behaviour.",
    acceptable: ["specific reinforcer", "reinforcer", "maintaining reinforcer"],
    feedback: "Functional variations of extinction require identifying the specific reinforcer — not just applying a generic 'ignore it' approach. Different maintaining reinforcers require entirely different forms of extinction."
  },

  "e6": {
    label: "DISCRIMINATION FRAME",
    stem: "Which of the following is NOT extinction? (a) withholding a reinforcer for a previously reinforced behaviour; (b) a decrease in behaviour caused by fatigue; (c) the diminishing response rate under an extinction procedure.",
    acceptable: ["b", "fatigue", "not extinction"],
    feedback: "(b) — extinction refers specifically to response reduction produced by withholding reinforcement. Decreases due to fatigue, satiation, or forgetting are not extinction. Extinction is defined by the response–reinforcer relationship, not by the topography of the outcome."
  },

  "e7": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner delivers reinforcement only on a noncontingent fixed-time schedule. Does this type of NCR involve extinction? Answer yes or no.",
    acceptable: ["yes"],
    feedback: "While NCR is different from extinction it is typically implemented with ext embedded in it. They may operate on different principles; however, NCR functioning as an AO; extinction disrupting the response–reinforcer contingency."
  },

  // ── SECTION 2: Functional Variations of Extinction ────────────────────────

  "e8": {
    section: "Section 2: Functional Variations of Extinction",
    stem: "The form that extinction takes depends on the ___________ of the behaviour — that is, what reinforcer is maintaining it.",
    acceptable: ["function", "maintaining reinforcer"],
    feedback: "This is the core principle of function-based extinction: the procedure must match the function. Identifying the maintaining reinforcer through functional assessment is therefore the critical first step. Applying the wrong form of extinction is not merely ineffective — it can inadvertently strengthen the behaviour."
  },

  "e9": {
    stem: "Behaviours maintained by ___________ reinforcement are placed on extinction when those behaviours no longer produce the reinforcer.",
    acceptable: ["positive", "socially mediated positive"],
    feedback: "Positive reinforcement extinction: the positive reinforcer (e.g., attention, tangibles, access to preferred items or activities) is withheld when the target behaviour occurs. The behaviour no longer produces the reinforcer."
  },

  "e10": {
    stem: "A person's frequent requests for reassurance are maintained by the social attention and comfort those requests produce. Extinction would involve ___________ the attention and reassurance when requests occur.",
    acceptable: ["withholding", "not providing", "no longer providing", "removing access to"],
    feedback: "Withholding the maintaining reinforcer — in this case social attention and reassurance — is the correct form of extinction for positively reinforced behaviour. Note that this would typically be combined with reinforcement of more appropriate communication rather than used alone."
  },

  "e11": {
    stem: "Behaviours maintained by negative reinforcement are placed on ___________ extinction, in which the behaviour no longer produces removal of the aversive stimulus.",
    acceptable: ["escape", "escape extinction"],
    feedback: "Escape extinction — the aversive stimulus (e.g., a medical procedure, a demanding task, an uncomfortable social situation) continues despite the behaviour. The behaviour no longer produces escape or avoidance."
  },

  "e12": {
    stem: "A person avoids taking prescribed medication by leaving the room when the topic is raised. During escape extinction, the discussion of medication is ___________ despite the avoidance behaviour.",
    acceptable: ["continued", "maintained", "kept in place", "not removed"],
    feedback: "Continued presentation of the avoided stimulus is what defines escape extinction. The avoidance behaviour no longer produces escape — the contingency between avoidance and removal of the stimulus is disrupted. In a clinical context this would require careful ethical consideration and likely be combined with other strategies."
  },

  "e13": {
    label: "DISCRIMINATION FRAME",
    stem: "A gym member has a history of leaving fitness classes early whenever the workout becomes physically demanding. The trainer introduces a policy where early departure is no longer permitted. Is this extinction for escape-maintained early departure? Answer yes or no.",
    acceptable: ["yes"],
    feedback: "Yes — withholding the negative reinforcer (escape from the demanding workout) when early departure occurs is escape extinction. The behaviour of leaving no longer produces its maintaining consequence."
  },

  "e14": {
    stem: "Behaviours maintained by automatic positive reinforcement are placed on extinction by masking or ___________ the sensory consequence that reinforces the behaviour.",
    acceptable: ["removing", "eliminating", "blocking"],
    feedback: "Sensory extinction for automatically reinforced behaviour involves removing or attenuating the sensory product of the behaviour. For example, wearing noise-cancelling headphones might reduce the auditory reinforcement maintaining repetitive vocalisation (e.g., humming)."
  },

  "e15": {
    stem: "The term ___________ extinction is used when automatic reinforcement is masked or removed, even though the term is a misnomer — it is the behaviour-producing reinforcement that is extinguished, not the sensory reinforcement itself.",
    acceptable: ["sensory"],
    feedback: "Sensory extinction — the term is widely used despite being technically imprecise. The behaviour is extinguished by removing its automatic sensory reinforcement, not by eliminating sensory stimulation from the environment altogether."
  },

  "e15b": {
    label: "DISCRIMINATION FRAME",
    stem: "A person's nail-biting is maintained by the tactile sensation it produces. A practitioner suggests wearing textured gloves to mask the sensory feedback. Which form of extinction is this?",
    acceptable: ["sensory extinction", "sensory"],
    feedback: "Sensory extinction — the gloves mask or reduce the automatic tactile reinforcement that maintains nail-biting. This is a relatively non-intrusive approach to extinction of automatically reinforced behaviour."
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
    feedback: "Extinction burst — a temporary worsening of the behaviour before it decreases. This is one of the most clinically significant side effects of extinction and a common reason practitioners and caregivers abandon extinction procedures prematurely."
  },

  "e18": {
    stem: "Extinction bursts are clinically significant partly because a temporary increase in intensity may cause ___________ or disruption if the behaviour is dangerous, and partly because practitioners may abandon the intervention during the burst.",
    acceptable: ["injury", "harm"],
    feedback: "Injury or harm. Both considerations highlight the importance of carefully considering whether extinction is justfied (e.g., undertaking a risk assessment)"
  },

  "e19": {
    stem: "Research suggests that extinction bursts are ___________ as prevalent as once believed in applied contexts, particularly when extinction is combined with other procedures such as differential reinforcement.",
    acceptable: ["not as", "less", "not"],
    feedback: "Published data suggest extinction bursts occurred in 36% of cases when extinction was used in isolation, but in only 12% of cases when combined with other procedures. Extinction bursts are a real risk but not an inevitable outcome."
  },

  "e20": {
    stem: "An increased tendency for novel or diverse behaviours to occur during extinction is called extinction-induced response ___________.",
    acceptable: ["variation", "variability"],
    feedback: "Response variation — new forms of behaviour emerge when the established form no longer produces reinforcement. This can be desirable (if more appropriate behaviours emerge and can be reinforced) or undesirable (if other concerning behaviours emerge)."
  },

  "e21": {
    stem: "Response variation during extinction can be desirable if it produces successive approximations of appropriate behaviour that a practitioner can ___________ reinforce to shape the target behaviour.",
    acceptable: ["differentially", "selectively"],
    feedback: "Desirable response variation — novel appropriate behaviours emerge and can be differentially reinforced. This is one mechanism through which shaping can occur naturally during extinction."
  },

  "e22": {
    stem: "The reemergence of previously extinguished behaviour after a period away from the context in which extinction was implemented is called ___________ recovery.",
    acceptable: ["spontaneous"],
    feedback: "Spontaneous recovery — the extinguished behaviour reappears at the start of a new session or after a break. It does not mean extinction has failed; each successive occurrence should be at a lower magnitude and extinguish more quickly."
  },

  "e23": {
    stem: "Spontaneous recovery is important practically because those implementing the programme may interpret the reemergence of behaviour as evidence that extinction ___________, and may abandon the procedure.",
    acceptable: ["failed", "is not working", "doesn't work"],
    feedback: "Everyone involved must be informed to expect spontaneous recovery before extinction begins. Each recurrence should be lower in magnitude and extinguish more quickly — this is the expected pattern, not a failure."
  },

  "e24": {
    stem: "The reemergence of a previously extinguished behaviour when reinforcement for an alternative behaviour is reduced or terminated is called ___________.",
    acceptable: ["resurgence"],
    feedback: "Resurgence — distinct from spontaneous recovery. Resurgence occurs specifically when reinforcement for the alternative behaviour (e.g., in DRA or FCT) is weakened or discontinued. The target behaviour re-emerges as a function of the change in the alternative behaviour's reinforcement."
  },
  
   "e24b": {
    stem: "In the context of extinction, ___________ refers to the recovery of an extinguished behaviour when the organism is placed in a context different from the one in which extinction occurred.",
    acceptable: ["renewal", "ABC renewal", "context renewal"],
    feedback: "Renewal — distinct from spontaneous recovery and resurgence. Renewal occurs when a change in context reinstates extinguished behaviour, even when the extinction contingency is still nominally in place. It is most commonly observed when the organism returns to the original acquisition context (ABA renewal) or is placed in a novel context (ABC renewal)."
},

  "e25": {
    label: "DISCRIMINATION FRAME",
    stem: "A person's requests for alcohol were reduced to near-zero through an extinction-based programme. After a period of hospitalisation where requests for alcohol were denied, the behaviour reappears upon returning home. This best meets the definition of the concept of ___________.",
    acceptable: ["renewal"],
    feedback: "Renewal — the extinguished behaviour reappears after returning to the initital acquisition context. This is an expected behavioural phenomenon, not treatment failure"
  },

  "e26": {
    label: "DISCRIMINATION FRAME",
    stem: "A person's smoking behaviour was successfully reduced through a programme using an alternative behaviour (chewing gum) that was reinforced on a dense schedule. When the gum reinforcement schedule is thinned, smoking re-emerges. Is this spontaneous recovery or resurgence?",
    acceptable: ["resurgence"],
    feedback: "Resurgence — the target behaviour re-emerges as a direct function of the reduction in reinforcement for the alternative behaviour. Spontaneous recovery occurs after a period away from the extinction context; resurgence is triggered by changes to the alternative behaviour's reinforcement contingency."
  },

  "e27": {
    label: "REVIEW",
    stem: "An increased tendency for novel or diverse forms of behaviour to emerge during extinction is called extinction-induced response ___________.",
    acceptable: ["variation", "variability"],
    feedback: "Response variation — new topographies emerge when the established form no longer produces reinforcement. This can be desirable or undesirable depending on what new behaviours emerge."
  },

  "e28": {
    label: "REVIEW",
    stem: "The reemergence of a previously extinguished behaviour when reinforcement for an alternative behaviour is reduced or terminated is called ___________.",
    acceptable: ["resurgence"],
    feedback: "Resurgence — distinct from spontaneous recovery. It is triggered by changes to the alternative behaviour's reinforcement contingency, not by the passage of time."
  },


  // ── SECTION 4: Resistance to Extinction ──────────────────────────────────

  "e30": {
    section: "Section 4: Resistance to Extinction",
    stem: "Behaviour that continues to occur during extinction has greater ___________ to extinction than behaviour that diminishes quickly.",
    acceptable: ["resistance"],
    feedback: "Resistance to extinction is a relative concept — it describes the persistence of responding during extinction. Higher resistance means the behaviour takes longer to extinguish. Understanding what drives resistance helps practitioners plan more effective programmes."
  },

  "e31": {
    stem: "Behaviour maintained on an ___________ schedule of reinforcement generally shows greater resistance to extinction than behaviour maintained on a continuous reinforcement (CRF) schedule.",
    acceptable: ["intermittent", "variable"],
    feedback: "The partial-reinforcement extinction effect — behaviour reinforced only some of the time is more resistant to extinction than behaviour reinforced every time. This has broad implications: gambling, social media use, and many other behaviours in everyday life are maintained on highly intermittent schedules and are correspondingly difficult to extinguish."
  },

  "e32": {
    stem: "Of the schedule types, ___________ schedules (e.g., VR, VI) tend to produce greater resistance to extinction than fixed schedules (e.g., FR, FI).",
    acceptable: ["variable"],
    feedback: "Variable schedules produce greater resistance to extinction than fixed schedules. VR and VI schedules produce unpredictable reinforcement, making it harder to discriminate when extinction is in effect. This is precisely why variable ratio schedules underpin slot machine design."
  },

  "e33": {
    stem: "In general, the ___________ the intermittent schedule of reinforcement, the greater the resistance to extinction will be.",
    acceptable: ["thinner", "leaner", "more intermittent"],
    feedback: "Thinner schedules (fewer reinforcers per response, or longer intervals between reinforcers) produce more resistant behaviour. Behaviours reinforced rarely but unpredictably — as many addictive behaviours are — may be extremely resistant to extinction."
  },

  "e34": {
    stem: "Resistance to extinction is likely to increase with the strength of the ___________ operation (EO) for the reinforcer being withheld.",
    acceptable: ["establishing", "eo"],
    feedback: "A strong EO increases the value of the reinforcer and the frequency of behaviour that has produced it. When extinction is implemented under a strong EO — for example, when someone is highly food-deprived or socially isolated — resistance is heightened."
  },

  "e35": {
    stem: "The number, ___________, and quality of the reinforcer during baseline may affect resistance to extinction.",
    acceptable: ["magnitude"],
    feedback: "Reinforcer parameters — number, magnitude, and quality — all influence resistance to extinction. More numerous, larger, or higher-quality reinforcers during baseline tend to produce greater resistance. The clinical implication is that a history of particularly potent reinforcement makes extinction more challenging."
  },

  "e36": {
    stem: "Response ___________ — how much physical or cognitive effort the behaviour requires — is likely to influence resistance to extinction. High-effort behaviours may extinguish more quickly.",
    acceptable: ["effort"],
    feedback: "Response effort affects resistance to extinction. When reinforcement is no longer available, the cost-to-benefit ratio of emitting a high-effort behaviour becomes unfavourable — responding is less likely to persist. This has implications for how practitioners might arrange competing contingencies."
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
    feedback: "A strong EO increases the current value of the reinforcer being withheld, increasing the motivation to keep responding during extinction — and therefore increasing resistance."
  },

  "e39": {
    label: "REVIEW",
    stem: "High response ___________ tends to reduce resistance to extinction, because the effort required to emit the behaviour becomes disproportionate when it no longer produces reinforcement.",
    acceptable: ["effort"],
    feedback: "Response effort — high-effort behaviours are more likely to extinguish quickly. When the cost-to-benefit ratio becomes unfavourable, responding is less likely to persist."
  },

  "e40": {
    label: "DISCRIMINATION FRAME",
    stem: "Two people are attempting to stop checking social media. Person A had notifications turned on and checked every time one arrived (CRF-like). Person B checked on an unpredictable, occasional basis (VR-like). Whose behaviour is likely to be more resistant to extinction?",
    acceptable: ["person b", "b", "vr", "variable", "person b's"],
    feedback: "Person B — behaviour maintained on a variable, unpredictable schedule is more resistant to extinction than behaviour maintained on a more regular schedule, due to the partial-reinforcement extinction effect."
  },

  // ── SECTION 5: Factors Influencing Efficacy of Extinction ─────────────────

  "e41": {
    section: "Section 5: Factors That Influence the Efficacy of Extinction",
    stem: "Several factors influence how effectively extinction reduces behaviour. The first and most important is ___________ the operant function of the behaviour.",
    acceptable: ["identifying", "identification of", "finding", "discovering", "determining"],
    feedback: "Identifying the function is the critical first step — it determines which form of extinction is required. Without this, there is a high risk of applying the wrong form of extinction, which may be ineffective or counterproductive."
  },

  "e42": {
    stem: "The baseline schedule of reinforcement affects extinction efficacy because behaviour maintained on a ___________ schedule is more persistent during extinction.",
    acceptable: ["intermittent", "variable", "thin"],
    feedback: "Baseline schedule history determines resistance to extinction. Practitioners should account for this when planning extinction — behaviour with a long intermittent reinforcement history will require more consistent implementation and longer duration."
  },

  "e43": {
    stem: "The delay to reinforcement during baseline also affects extinction efficacy. Behaviour is more resistant to extinction when baseline delays to reinforcement were ___________ and variable.",
    acceptable: ["unpredictable", "long", "longer"],
    feedback: "Unpredictable, variable delays to reinforcement during baseline increase resistance to extinction. Conversely, constant and predictable delays produce less resistance. This is one reason why behaviours in naturalistic settings — where reinforcement timing is highly variable — can be particularly resistant."
  },

  "e44": {
    stem: "Extinction is more effective when it is combined with ___________ for appropriate or alternative behaviour, because this shifts responding toward the alternative.",
    acceptable: ["reinforcement", "differential reinforcement"],
    feedback: "Extinction combined with reinforcement — consistent with the matching law — reduces the relative rate of reinforcement for the target behaviour while increasing it for appropriate behaviour. Research shows this combination reduces extinction bursts and produces more durable change."
  },

  "e45": {
    stem: "Signalled extinction — using a clear stimulus to indicate when extinction is in effect — produces ___________ suppression compared to unsignalled extinction.",
    acceptable: ["more", "greater", "faster", "more immediate"],
    feedback: "Signalled extinction enables the person to discriminate when reinforcement is unavailable, producing faster and more complete suppression. Multiple schedules with signalled extinction components have been used effectively across clinical and non-clinical settings."
  },

  "e46": {
    stem: "Treatment integrity failures during extinction alone are likely to have a ___________ effect on treatment, because failures create intermittent reinforcement of the target behaviour.",
    acceptable: ["detrimental", "negative", "harmful"],
    feedback: "Treatment integrity failures during extinction create an intermittent-reinforcement schedule, which increases resistance to extinction. This highlights the clinical importance of consistent implementation across all settings and all people involved."
  },

  "e47": {
    label: "REVIEW",
    stem: "The single most important factor influencing extinction efficacy is first ___________ the operant function of the behaviour, so the correct form of extinction can be implemented.",
    acceptable: ["identifying", "identification of", "finding", "discovering", "determining"],
    feedback: "Identifying function is the critical first step. Applying the wrong form of extinction because the function was not assessed is one of the most common clinical errors — and it can inadvertently strengthen the behaviour."
  },

  "e48": {
    label: "REVIEW",
    stem: "Treatment integrity failures during extinction create an ___________ reinforcement schedule, which increases resistance to extinction and undermines treatment.",
    acceptable: ["intermittent", "variable"],
    feedback: "Treatment integrity failures inadvertently create partial or intermittent reinforcement — making the behaviour more resistant to extinction. Consistent implementation across all settings and all people involved is therefore essential."
  },

  // ── SECTION 6: When Not to Use Extinction ─────────────────────────────────

  "e49": {
    section: "Section 6: When Not to Use Extinction",
    stem: "Extinction should rarely be used as a singular intervention, particularly when the target behaviour is ___________, because side effects such as extinction bursts may pose immediate risks.",
    acceptable: ["harmful", "dangerous", "life-threatening", "self-injurious"],
    feedback: "Dangerous behaviour requires more proactive planning than extinction alone can provide. An extinction burst in the context of dangerous behaviour could cause serious harm. Additional safeguards and complementary procedures are always required."
  },

  "e50": {
    stem: "Extinction should be avoided when all sources of ___________ for the behaviour cannot be withheld, because partial reinforcement will maintain or even strengthen the behaviour.",
    acceptable: ["reinforcement"],
    feedback: "If not all sources of reinforcement can be controlled — for example, if peers, family members, or the environment continue to provide the maintaining reinforcer — extinction cannot be implemented with integrity and may increase resistance rather than reduce the behaviour."
  },

  "e51": {
    stem: "Extinction should not be used as a singular intervention when a ___________ reduction in behaviour is required.",
    acceptable: ["rapid", "immediate", "quick"],
    feedback: "Extinction produces gradual reduction. When rapid change is clinically necessary — for example, in the case of serious self-harm or behaviour that poses immediate safety risks — other procedures that produce faster suppression should be considered alongside or instead of extinction."
  },

  "e52": {
    stem: "Extinction should be used with caution in group settings when others are likely to ___________ the behaviour, because observing an extinction burst may prompt imitation.",
    acceptable: ["imitate", "copy", "model"],
    feedback: "In group settings such as classrooms, residential facilities, or group therapy contexts, other individuals observing intensified or varied behaviour during an extinction burst may imitate it. This contextual factor must be considered in planning."
  },

  // ── SECTION 7: Function-Based Extinction in Practice ─────────────────────

  "e53": {
    section: "Section 7: Function-Based Extinction in Practice",
    stem: "A functional analysis reveals that a person's reassurance-seeking behaviour is maintained by peer attention, not by caregiver attention. The caregiver ignoring the behaviour is likely to be effective — true or false?",
    acceptable: ["false"],
    feedback: "False — withholding the caregiver's attention will not extinguish a behaviour maintained by peer attention. Extinction must target the specific source of reinforcement that actually maintains the behaviour. Applying attention extinction to peer-maintained behaviour leaves the maintaining contingency entirely intact."
  },

  "e54": {
    stem: "When extinction cannot be implemented with full integrity — for example, because automatic reinforcement cannot be completely withheld — an alternative is to minimise reinforcement for the target behaviour and ___________ reinforcement for appropriate behaviour.",
    acceptable: ["maximise", "increase", "provide", "deliver"],
    feedback: "Increase. When pure extinction is not feasible, shifting the differential between reinforcement for target and appropriate behaviour — even imperfectly — can still favour appropriate responding. This is more realistic in many applied settings than the textbook ideal of zero reinforcement for the target behaviour."
  },

  "e55": {
    stem: "The relationship between extinction and motivating operations is clinically important. Escape extinction may be ___________ if the demands or situations being escaped are genuinely excessive, inappropriate, or not matched to the person's needs.",
    acceptable: ["inappropriate", "contraindicated", "not appropriate", "unethical"],
    feedback: "If the motivation to escape is driven by demands that are poorly matched, overly aversive, or not respectful of the person's needs, the clinically and ethically appropriate response is to modify those conditions — not to remove the person's ability to escape them. This is a critical consideration in neuro-affirming practice."
  },

  // ── SECTION 8: Integration — Applied Scenarios ────────────────────────────

  "e56": {
    section: "Section 8: Integration",
    stem: "A person's gym attendance drops after their gym partner moves away. Attending the gym is no longer socially reinforced. This decrease in attendance is an example of extinction — true or false?",
    acceptable: ["true"],
    feedback: "True — the behaviour of attending the gym was previously reinforced (by social interaction with the gym partner). Now that reinforcement has been withheld (the partner is no longer present), attendance decreases. This is extinction in an everyday context."
  },

  "e57": {
    stem: "After several months of not attending the gym, the person unexpectedly resumes going for a few sessions before stopping again. This brief reappearance of gym attendance is an example of ___________ recovery.",
    acceptable: ["spontaneous"],
    feedback: "Spontaneous recovery — the previously extinguished behaviour (gym attendance) reappears after a period away from the extinction context. It is temporary and will extinguish again more quickly with each recurrence."
  },

  "e58": {
    stem: "To increase the durability of the reduced gym attendance, a practitioner should ___________ extinction with reinforcement of alternative exercise behaviour (e.g., home workouts with a friend).",
    acceptable: ["combine", "supplement", "pair"],
    feedback: "Combining extinction with reinforcement of an appropriate alternative shifts responding toward the alternative and reduces the likelihood of spontaneous recovery or resurgence. Extinction alone produces less durable outcomes."
  },

  "e59": {
    stem: "A person's medication non-adherence was reinforced on an unpredictable basis — sometimes a family member reminded them, sometimes no one did, and sometimes they remembered independently. The practitioner should expect this behaviour to show ___________ resistance to extinction compared to behaviour that was consistently prompted.",
    acceptable: ["greater", "higher", "more"],
    feedback: "Greater resistance — unpredictable, variable reinforcement of non-adherence produces greater resistance to extinction than consistent prompting would have. Practitioners planning adherence interventions should account for this history."
  },

  "e60": {
    label: "INTEGRATION FRAME",
    stem: "A behaviour analyst is planning extinction for escape-maintained avoidance of physiotherapy exercises in a rehabilitation setting. The first step is to confirm the escape function via ___________ before implementing escape extinction.",
    acceptable: ["functional analysis", "functional assessment", "functional behaviour assessment", "fba"],
    feedback: "Functional assessment first — escape extinction is only appropriate if escape is confirmed as the maintaining reinforcer. Applying attention extinction to escape-maintained behaviour leaves the contingency intact and produces no meaningful change."
  },

  "e61": {
    label: "INTEGRATION FRAME",
    stem: "Because response topography may change at the onset of extinction, the practitioner working in the rehabilitation setting must plan for extinction-induced ___________ before the programme begins.",
    acceptable: ["variability", "variation", "aggression"],
    feedback: "Proactive planning for response variation and potential aggression — including risk assessment and trained support — is a clinical requirement. In a rehabilitation setting, patient safety and dignity must be central to this planning."
  },

  "e62": {
    label: "INTEGRATION FRAME",
    stem: "For extinction to be maximally effective, all practitioners and caregivers across all settings must implement it ___________. If this cannot be guaranteed, the practitioner should consider whether extinction is the most appropriate strategy.",
    acceptable: ["consistently"],
    feedback: "Consistent implementation is essential. Any inconsistency creates intermittent reinforcement, increasing resistance. If consistent implementation across all environments cannot be achieved — a common real-world constraint — alternative approaches may be more appropriate."
  },

  "e63": {
    label: "INTEGRATION FRAME",
    stem: "Signalled extinction produces ___________ suppression than unsignalled extinction, because the person can discriminate when reinforcement is unavailable.",
    acceptable: ["more", "greater", "faster"],
    feedback: "Signalled extinction facilitates stimulus control — the person learns to discriminate the extinction context. This produces faster and more complete suppression, and may be more acceptable because it is more transparent about the contingency in effect."
  },

  // ── SECTION 9: Applied Analysis Frames ───────────────────────────────────


  "e65": {
    stem: "An older adult living in a care home engages in repeated calling out at night. Staff have been inconsistently attending — sometimes immediately, sometimes not at all. A new extinction programme requires staff to stop attending to calling out. The practitioner should predict that extinction will be ___________ and plan accordingly.",
    acceptable: ["slow", "difficult", "prolonged", "challenging", "resistant"],
    feedback: "The history of highly variable, unpredictable reinforcement (intermittent staff attention) means the behaviour has high resistance to extinction and the effects of ext might be slow. The practitioner should prepare staff for a prolonged extinction process with potential bursts, and should strongly consider combining extinction with reinforcement of appropriate communication."
  },

  "e66": {
    stem: "A health psychologist is working with a person trying to reduce alcohol consumption. The person reports that drinking is maintained by the social reinforcement at their regular pub visits. The psychologist recommends stopping pub visits entirely (extinction) but does not identify an alternative source of social reinforcement. Based on what you know about extinction, this approach is likely to produce ___________ outcomes.",
    acceptable: ["poor", "suboptimal", "temporary", "limited", "short-lived"],
    feedback: "Extinction alone without a reinforced alternative is likely to produce temporary results at best, with a high probability of resurgence when social opportunities decrease further or when the person returns to the pub environment. Combining extinction with reinforcement of alternative social behaviours in new contexts would produce more durable outcomes."
  },

  "e67": {
    stem: "A teacher notices that a student's disruptive vocalising decreases substantially when the teacher stops responding to it. However, two students sitting nearby continue to laugh each time it occurs. The teacher's extinction programme is failing because ___________ of the maintaining reinforcer cannot be achieved.",
    acceptable: ["consistent withholding", "control", "full withholding", "consistency"],
    feedback: "Extinction requires that all sources of the maintaining reinforcer are controlled. If peer attention continues to reinforce the vocalising, the teacher's extinction procedure leaves the maintaining contingency partially intact — creating intermittent reinforcement that may actually increase resistance to extinction."
  },

  "e68": {
    stem: "A student has learned that reporting high pain levels produces immediate attention and relief from responsibilities. A clinician places pain-reporting on extinction (no longer providing special attention or task relief). This is ethically ___________ without first establishing that the reported pain is indeed operant behaviour and not a consequence of a genuine medical symptom.",
    acceptable: ["problematic", "questionable", "inappropriate", "contraindicated", "indefensible"],
    feedback: "This scenario illustrates a critical ethical constraint on extinction in health contexts. Extinction of pain behaviour requires thorough medical assessment to rule out genuine physiological causes. Applying extinction without this assessment risks withholding appropriate care and is ethically and clinically indefensible."
  },

  "e69": {
    label: "APPLIED ANALYSIS",
    stem: "A gambling treatment programme uses extinction — removing all access to gambling reinforcement. Six months later, the person visits a casino for the first time since treatment and gambles heavily. This is best explained as ___________.",
    acceptable: ["resurgence", "spontaneous recovery"],
    feedback: "Both resurgence and spontaneous recovery are plausible here, but the return to the gambling environment (the original extinction context) after a period away suggests spontaneous recovery — the previously extinguished behaviour reappears upon re-exposure to the context associated with the original reinforcement history. This is a well-documented challenge in addiction treatment and underscores why extinction alone is rarely sufficient."
  },

  "e70": {
    label: "APPLIED ANALYSIS",
    stem: "A clinician notes that a person's anxiety-related avoidance behaviour is maintained by escape from aversive private sensations (automatic negative reinforcement). Which form of extinction is theoretically indicated",
    acceptable: ["escape extinction", "sensory extinction", "automatic", "impossible to withhold"],
    feedback: "Escape extinction is theoretically indicated — the behaviour should continue despite the aversive internal sensations (i.e., exposure without escape). However, automatic reinforcement maintained by internal sensory events is particularly challenging because the practitioner cannot directly manipulate private events"
  },

 "e71": {
  label: "APPLIED ANALYSIS",
  stem: "A person stops taking their blood pressure medication when they feel well, even though the medication is still effective. The behaviour–reinforcer contingency (medication → symptom relief) remains intact, but symptom relief currently has low reinforcing value because the person is not experiencing symptoms. This decrease in medication-taking is best explained by a change in ___________, not extinction.",
  acceptable: ["motivating operations", "mo", "abolishing operation", "ao"],
  feedback: "This is a motivating operation effect — specifically an abolishing operation. The medication has not stopped producing its effects; rather, the current value of symptom relief as a reinforcer has been temporarily reduced. Extinction would require that the medication genuinely stopped producing symptom relief. The distinction matters clinically: if this were extinction, arranging alternative reinforcers would be the solution; because it is an MO effect, addressing the AO — for example by making the health risks of non-adherence more salient, or by ensuring the person understands that the medication is maintaining their wellness — is more directly relevant."
},
  
  "e72": {
    label: "APPLIED ANALYSIS",
    stem: "A person's alcohol-seeking behaviour was extinguished in a treatment facility (Context B). On discharge, the person returns home (Context A — where drinking was originally acquired) and alcohol-seeking resumes. This is an example of ___________.",
    acceptable: ["renewal"],
    feedback: "Renewal — the behaviour was acquired in Context A, extinguished in Context B, and recovers upon return to Context A. This is one of the most clinically significant findings in the extinction literature for addiction treatment: gains achieved in a treatment setting may not transfer to the original environment where the behaviour was established."
},


  "e73": {
    label: "APPLIED ANALYSIS",
    stem: "Renewal, resurgence, and spontaneous recovery all demonstrate that extinction produces ___________ suppression of behaviour rather than permanent elimination of the original learning.",
    acceptable: ["temporary", "conditional", "context-dependent", "reversible"],
    feedback: "All three phenomena — renewal, resurgence, and spontaneous recovery — share a common implication: extinction suppresses behaviour under specific conditions but does not destroy the original reinforcement history. This is why extinction-based treatments are most durable when combined with reinforcement of alternative behaviour, generalisation across contexts, and relapse prevention planning."
}

};
