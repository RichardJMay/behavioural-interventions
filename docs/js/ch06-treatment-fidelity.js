window.PI_FRAMES = {

  // ── SECTION 1: What is Treatment Fidelity ────────────────────────────────

  "t1": {
    section: "What is Treatment Fidelity?",
    stem: "Treatment fidelity and treatment _______ are two terms used interchangeably to describe how closely an intervention is implemented according to its protocol.",
    acceptable: ["integrity"],
    feedback: "Treatment fidelity and treatment integrity are synonymous. Both refer to the degree to which an intervention is delivered as designed. Deviation from the protocol — in either direction — compromises fidelity."
  },

  "t2": {
    stem: "IOA is concerned with the reliability of the dependent variable. Treatment fidelity is concerned with the reliability of the _______.",
    acceptable: ["independent variable", "IV", "intervention", "treatment"],
    feedback: "IOA asks whether two observers recorded the same thing — it is about measurement reliability. Treatment fidelity asks whether the intervention was delivered correctly — it is about the reliability of the independent variable."
  },

  "t3": {
    stem: "A researcher carefully documents IOA throughout a study but never checks whether the intervention was implemented correctly. The researcher has neglected the reliability of the _______ variable.",
    acceptable: ["independent", "IV"],
    feedback: "IOA = reliability of the DV. Treatment fidelity = reliability of the IV. A study that documents one but not the other cannot fully support a functional relation claim."
  },

  "t4": {
    label: "DISCRIMINATION FRAME",
    stem: "A teacher collects data on how often a child talks out of turn during lessons. Is this a check of treatment fidelity? (yes/no)",
    acceptable: ["no"],
    feedback: "No. Data collection on the target behaviour monitors the dependent variable. Treatment fidelity would ask whether the teacher is implementing the agreed intervention correctly — that is a question about the independent variable."
  },

  "t5": {
    stem: "The research literature has historically routinely reported _______ but rarely reported treatment fidelity.",
    acceptable: ["ioa", "interobserver agreement"],
    feedback: "This double standard is well documented. Researchers carefully establish the reliability of their outcome measures but frequently neglect to report whether the intervention itself was implemented as intended — leaving the independent variable unverified."
  },

  "t5b": {
    stem: "Gradual, unplanned deviation from a treatment protocol over time — driven by factors such as practitioner style, perceived irrelevance of certain components, or reduced monitoring — is referred to as therapeutic _______.",
    acceptable: ["drift"],
    feedback: "Therapeutic drift is particularly common in naturalistic clinical settings where supervision is infrequent. It differs from deliberate adaptation in that it is unplanned and typically unrecognised by the implementer. Ongoing fidelity monitoring is the primary mechanism for detecting and correcting drift before it becomes entrenched."
  },

  // ── SECTION 2: Why Treatment Fidelity Matters ────────────────────────────

  "t6": {
    section: "Why Treatment Fidelity Matters",
    stem: "Low treatment fidelity means that an observed change in the dependent variable cannot be confidently attributed to the _______, because we do not know whether it was delivered correctly.",
    acceptable: ["intervention", "independent variable", "IV", "treatment"],
    feedback: "This is the core interpretive problem. If the IV was not implemented as intended, any change in the DV might reflect what the practitioner actually did rather than the prescribed procedure. Low fidelity does not just weaken a study — it can reverse the apparent conclusion entirely."
  },

  "t6b": {
    stem: "Poor treatment fidelity threatens internal validity by introducing unsystematic error into the data. In group designs, this increases within-group variability, which reduces statistical _______ and makes genuine treatment effects harder to detect.",
    acceptable: ["power"],
    feedback: "When implementation varies unsystematically across participants or sessions, it adds noise to the data. An effective treatment may fail to produce a statistically significant result not because it does not work, but because variable delivery obscured the effect. This means fidelity failures can produce false negatives as well as false positives."
  },

  "t6c": {
    stem: "When an intervention appears to work despite low fidelity, this does not necessarily mean the treatment is effective — it may mean the treatment actually delivered was _______ from the one originally intended.",
    acceptable: ["different"],
    feedback: "Low fidelity does not indicate a weak treatment; it indicates a different treatment. If outcomes are positive under low fidelity, the key question becomes: what was actually implemented, and why did it work? This reframes fidelity data as clinically informative rather than merely methodological — it may provide clues for developing a more effective or streamlined protocol."
  },

  "t6d": {
    stem: "Beyond internal validity, a study without adequate fidelity data cannot establish _______ validity, because findings cannot be generalised without knowing exactly what treatment was delivered and how.",
    acceptable: ["external"],
    feedback: "External validity — the generalisability of findings to other settings, populations, and implementers — depends on an accurate description of what was done. If the implemented treatment deviated from the protocol, replication is impossible and any dissemination of the intervention is built on an incomplete account of what actually produced the effect."
  },

  "t7": {
    stem: "Research on treatment-integrity errors shows that skill acquisition is generally _______ sensitive to integrity failures than behaviour reduction procedures.",
    acceptable: ["more"],
    feedback: "Behaviour reduction procedures have shown robustness even at integrity levels as low as 40–60%. Skill acquisition, by contrast, can be disrupted by errors occurring on as few as 15–20% of trials. This asymmetry has direct implications for how stringently fidelity should be monitored across different types of programmes."
  },

  "t8": {
    stem: "Bergmann et al. (2021) found that reinforcement errors occurring on _______ percent or more of instructional trials were sufficient to delay or prevent skill acquisition.",
    acceptable: ["20"],
    feedback: "At 15% or fewer error trials (85%+ integrity) most participants reached mastery. At 20% or more errors, acquisition was delayed or did not occur. This parametric finding suggests an 85% integrity threshold is clinically meaningful for skill acquisition programmes, though no field-wide standard currently exists."
  },

  "t9": {
    label: "DISCRIMINATION FRAME",
    stem: "St. Peter Pipkin et al. (2010) found that DRA continued to reduce problem behaviour even when integrity dropped to 40%. Does this mean fidelity monitoring is less important for behaviour reduction than skill acquisition programmes? (yes/no)",
    acceptable: ["no"],
    feedback: "No. Those studies manipulated integrity after a period of 100% implementation, which may have had protective effects. In practice, behaviour intervention plans include multiple components across complex real-world contexts, making it unwise to assume robustness demonstrated in analogue research will generalise. Fidelity monitoring remains essential regardless of intervention type."
  },

  // ── SECTION 3: Adherence, Competence, and Drift ──────────────────────────

  "t6e": {
    section: "Adherence, Competence, and Therapeutic Drift",
    stem: "Treatment integrity is conceptualised as having three distinct aspects: adherence to the protocol, _______ in delivering it, and differentiation from other treatments.",
    acceptable: ["competence"],
    feedback: "Adherence captures whether prescribed procedures were delivered and proscribed ones avoided — it is essentially quantitative. Competence captures how well procedures were delivered — the skill and judgement applied. A practitioner can adhere to every step of a protocol and still implement it incompetently, for example by delivering reinforcement with excessive latency or prompts in the wrong sequence."
  },

  "t6f": {
    label: "DISCRIMINATION FRAME",
    stem: "A behaviour technician runs every trial in a discrete-trial programme, delivers reinforcement on every correct response, and implements error correction as specified. However, they deliver instructions in a flat, inattentive manner that results in poor learner engagement. Is this an adherence problem? (yes/no)",
    acceptable: ["no"],
    feedback: "No — this is a competence problem. Adherence concerns whether prescribed components were implemented; this technician implemented them all correctly. Competence concerns how well they were implemented. The quality of instruction delivery is a competence dimension and would not be captured by a binary adherence checklist."
  },

  "t10": {
    stem: "Adherence captures whether prescribed procedures were implemented. The complementary dimension — capturing how well those procedures were executed — is called _______.",
    acceptable: ["competence"],
    feedback: "A practitioner who follows every step of a protocol but delivers instructions poorly, prompts at the wrong moment, or fails to respond sensitively to the learner's behaviour may achieve high adherence with low competence. Both dimensions matter: adherence without competence is insufficient for optimal outcomes."
  },

  // ── SECTION 4: Types of Fidelity Error ───────────────────────────────────

  "t11": {
    section: "Types of Fidelity Error",
    stem: "When a component of the protocol is not implemented at all, this is called an error of _______.",
    acceptable: ["omission"],
    feedback: "Errors of omission occur when prescribed components are missed entirely — for example, failing to deliver a reinforcer, omitting a prompt, or not implementing an error-correction procedure. They are the most commonly observed error type in naturalistic settings."
  },

  "t12": {
    stem: "When a practitioner implements a procedure that is not prescribed by the protocol — such as delivering reinforcement following problem behaviour during a DRA procedure — this is an error of _______.",
    acceptable: ["commission"],
    feedback: "Errors of commission involve doing something the protocol explicitly does not include. In the DRA example, reinforcing problem behaviour directly undermines the differential contingency the procedure depends on. Both omission and commission errors have demonstrated effects on intervention outcomes."
  },

  "t13": {
    label: "DISCRIMINATION FRAME",
    stem: "During extinction, a therapist accidentally provides attention following problem behaviour. This is an error of _______.",
    acceptable: ["commission"],
    feedback: "The protocol specifies withholding attention; providing it constitutes implementing a non-prescribed procedure — an error of commission. An omission error would be failing to implement a step that should have occurred, such as failing to run a scheduled teaching trial."
  },

  "t14": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner forgets to run the mand training trials specified in the programme for that session. This is an error of _______.",
    acceptable: ["omission"],
    feedback: "Failing to implement a prescribed component is an omission error. Commission errors involve actively doing something not in the protocol. The distinction matters practically: omission and commission errors may require different retraining responses."
  },

  // ── SECTION 5: Measuring Treatment Fidelity ──────────────────────────────

  "t16": {
    section: "Measuring Treatment Fidelity",
    stem: "A practitioner who completes 8 out of 10 prescribed steps correctly in a session has a component integrity score of _______ percent.",
    acceptable: ["80"],
    feedback: "Component integrity = (steps performed correctly ÷ total steps) × 100. This approach is diagnostically useful because it identifies which specific components are failing, rather than producing a single undifferentiated summary score that may obscure errors on critical steps."
  },

  "t17": {
    stem: "Opportunity-based integrity measurement divides the number of correct responses by the total number of _______ to respond.",
    acceptable: ["opportunities", "opportunities to respond"],
    feedback: "Opportunity-based measurement captures whether practitioners respond correctly when occasions to implement a procedure arise — for example, delivering a reinforcer every time the target behaviour occurs rather than only some of the time. It is particularly suited to procedures that are contingency-based rather than step-by-step."
  },

  "t25": {
    stem: "Global integrity provides an overall summary score across all components. A limitation of global scoring is that it can _______ errors on specific components.",
    acceptable: ["obscure", "mask", "hide", "overlook", "miss"],
    feedback: "It can hide issues with individual components. A practitioner might achieve 85% global integrity while consistently failing to implement one or two critical components across every session. Component-level data would reveal this pattern; a global score would not. This is why component integrity is generally preferred for guiding retraining decisions."
  },

  "t26": {
    label: "DISCRIMINATION FRAME",
    stem: "An all-or-nothing by trial measure marks a trial as correct only if every component was implemented correctly within that trial. Compared to global integrity, this method is _______ stringent.",
    acceptable: ["more"],
    feedback: "All-or-nothing by trial is the most stringent measure — a single error on any component means the entire trial is scored as incorrect. This can reveal implementation problems that a global percentage would obscure, but it provides no information about which specific components failed, limiting its usefulness for guiding targeted retraining."
  },

  "t18": {
    label: "REVIEW",
    stem: "Component-based measurement is preferred over global scoring when the goal is to identify which specific _______ of a protocol are being implemented correctly and which are not.",
    acceptable: ["steps", "components", "elements", "aspects", "parts", "items"],
    feedback: "Component-based measurement gives a step-by-step picture of implementation accuracy. A global score can be high while a critical component is being systematically missed — making component-level data essential for targeted supervision and retraining decisions."
  },

  "t19": {
    stem: "Direct observation is the recommended primary method for measuring treatment fidelity, and can be supplemented with _______ products such as written records or completed data sheets.",
    acceptable: ["permanent", "permanent product"],
    feedback: "Permanent products provide indirect but useful corroborating evidence and can be reviewed flexibly outside observation periods. However, they cannot confirm that the implementer was the person who delivered the intervention or that it occurred at the correct time, which is why direct observation remains the gold standard."
  },

  "t27": {
    label: "REVIEW",
    stem: "Indirect measures of treatment fidelity — such as permanent product review and self-report — tend to _______ integrity compared to direct observation.",
    acceptable: ["overestimate", "inflate"],
    feedback: "Less rigorous measurement methods consistently produce higher integrity estimates. Self-report is particularly susceptible to social desirability and demand characteristics. Permanent products can be completed retrospectively. Direct observation, especially when unannounced and conducted on a variable schedule, provides the most accurate data — though observer reactivity remains a consideration."
  },

  // ── SECTION 6: Improving Treatment Fidelity ──────────────────────────────

  "t20": {
    section: "Improving Treatment Fidelity",
    stem: "_______ — comprising instruction, modelling, rehearsal, and feedback — is the evidence-based approach recommended for establishing practitioner implementation repertoires.",
    acceptable: ["bst", "behavioural skills training", "behavioral skills training"],
    feedback: "BST works because it is active rather than passive. Didactic instruction alone is insufficient — active rehearsal and immediate feedback on performance are the components that drive skill acquisition in the implementer. BST is also the training approach whose components most closely map onto the strategies identified in implementation science as effective for practitioner behaviour change."
  },

  "t21": {
    stem: "Witt et al. (1997) found that treatment integrity declined sharply during independent implementation after initial training. Integrity was restored only when _______ feedback was reintroduced.",
    acceptable: ["performance", "performance feedback", "contingent"],
    feedback: "Training alone was not sufficient — it produced an initial gain that did not persist without ongoing performance feedback. This is one of the clearest demonstrations that supervision must be active and data-based throughout the intervention, not just at the point of initial training."
  },

  "t22": {
    stem: "Performance feedback that focuses only on client outcomes — such as whether the child improved — is less effective than feedback that directly addresses the behaviour of the ___________.",
    acceptable: ["staff", "implementer", "practitioner", "therapist", "behaviour analyst", "teacher"],
    feedback: "Client outcomes are influenced by many factors beyond the practitioner's implementation. To improve fidelity, feedback must target the implementer's specific actions: which protocol steps were completed correctly and which were not, anchored to the integrity data and presented in both written and graphed form."
  },

  "t23": {
    stem: "Fading performance feedback from daily to _______ and biweekly schedules may support maintenance of treatment integrity over time.",
    acceptable: ["weekly"],
    feedback: "Abruptly withdrawing feedback often leads to degradation of fidelity. Systematic fading — moving to weekly then biweekly review — can support maintenance while reducing supervision burden. The fading schedule itself should be data-driven, contingent on sustained high-integrity performance rather than time elapsed."
  },

  "t23b": {
    stem: "When fidelity data are collected at the component level over time, it becomes possible to identify which specific steps co-vary most strongly with outcomes — helping to identify the _______ ingredients of the intervention.",
    acceptable: ["active", "essential", "critical"],
    feedback: "This connects fidelity monitoring to mechanisms-of-change research. It helps researchers which components of a treatment are the active ingredients and allows protocols to be refined and streamlined for dissemination without sacrificing effectiveness. It also helps supervisors prioritise which components to target most closely in training and feedback."
  },

  // ── SECTION 7: Writing Behaviour Intervention Plans ──────────────────────

  "t28": {
    section: "Writing Behaviour Intervention Plans",
    stem: "A well-written behaviour intervention plan must specify not only what practitioners should do, but also what they should _______, to support both fidelity measurement and treatment differentiation.",
    acceptable: ["avoid", "not do", "refrain from"],
    feedback: "Proscribed procedures — those explicitly forbidden by the protocol — are as important as prescribed ones. Specifying what must not be done allows fidelity assessment to capture commission errors systematically. In comparative research, it also supports treatment differentiation by ensuring that implementers in one condition are not inadvertently importing elements of another."
  },

  "t28b": {
    stem: "Expert content validation studies — such as Williams and Vollmer (2015) — use consensus among experienced practitioners and researchers to identify the _______ components that should be included in a behaviour intervention plan.",
    acceptable: ["essential", "core", "required", "key", "neccessary", "important", "vital"],
    feedback: "Content validation provides an empirical basis for determining the essential components that a BIP must contain. This supports the development of fidelity checklists grounded in expert consensus rather than individual clinical judgement, and helps distinguish required components from auxiliary ones — a distinction with direct implications for what must be monitored and what can be adapted."
  },

  "t29": {
    label: "REVIEW",
    stem: "A study reports 95% IOA throughout but provides no treatment fidelity data. A reviewer argues that the high IOA is sufficient to support the functional relation claim. Is the reviewer correct? (yes/no)",
    acceptable: ["no"],
    feedback: "No. IOA establishes that the DV was measured consistently — it says nothing about whether the IV was implemented correctly. Without fidelity data, the independent variable is unverified. This is precisely the double standard that has been documented across the behaviour analytic literature."
  },


  "t30": {
    label: "INTEGRATION FRAME",
    stem: "A practitioner delivers a manualised intervention with 95% adherence across all sessions, but a client shows no improvement. A supervisor concludes the intervention is ineffective. Is this conclusion justified? (yes/no)",
    acceptable: ["no"],
    feedback: "No. High adherence does not guarantee high competence. A practitioner can implement every prescribed step while doing so poorly — delivering prompts at the wrong moment, with insufficient precision, or without sensitivity to the learner's responses. If competence was not assessed alongside adherence, poor outcomes under high adherence may reflect inadequate quality of delivery rather than a failure of the intervention itself."
  }

};
