window.PI_FRAMES = {

  // ── SECTION 1: What is Treatment Fidelity ──────────────────────────────────

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
    stem: "A researcher carefully documents IOA throughout a study but never checks whether the intervention was implemented correctly. The researcher has addressed the reliability of the dependent variable but neglected the reliability of the _______.",
    acceptable: ["independent variable", "IV", "intervention", "treatment"],
    feedback: "IOA = reliability of the DV. Treatment fidelity = reliability of the IV. A study that documents one but not the other cannot fully support a functional relation claim."
  },

  "t4": {
    label: "DISCRIMINATION FRAME",
    stem: "A teacher collects data on how often a child talks out of turn during lessons. This is an example of monitoring the _______.",
    acceptable: ["dependent variable", "DV", "behaviour", "data"],
    feedback: "Data collection on the target behaviour monitors the dependent variable. Treatment fidelity would instead ask whether the teacher is implementing the agreed intervention correctly — that is the independent variable."
  },

  "t5": {
    stem: "The research literature has historically shown a _______ standard, routinely reporting IOA but rarely reporting treatment fidelity.",
    acceptable: ["double", "double standard"],
    feedback: "This is a well-documented gap in the literature. Researchers carefully document the reliability of their outcome measures but frequently neglect to report whether the intervention itself was implemented as intended."
  },

  // ── SECTION 2: Why Treatment Fidelity Matters ─────────────────────────────

  "t6": {
    section: "Why Treatment Fidelity Matters",
    stem: "An intervention that appears to be working despite low fidelity may actually be succeeding because practitioners have drifted toward a more _______ approach than the one prescribed.",
    acceptable: ["effective", "reinforcing", "functional"],
    feedback: "This is one of the two distortions low fidelity creates. The other is the reverse: an intervention that appears to fail may have been implemented so poorly that no valid test of its effects occurred. Both mean you cannot draw conclusions from your data."
  },

  "t7": {
    stem: "Demonstrating a functional relation requires showing that changes in the dependent variable were produced by the independent variable. This is why poor treatment fidelity is a direct threat to _______ validity.",
    acceptable: ["internal"],
    feedback: "Internal validity is the degree to which observed effects can be attributed to the independent variable rather than extraneous factors. If the IV was not delivered consistently, you cannot rule out alternative explanations for any change in the DV."
  },

  "t8": {
    stem: "Research has shown that in naturalistic settings, teacher implementation of prescribed interventions can be as low as _______ percent.",
    acceptable: ["4", "four", "0", "zero"],
    feedback: "Wickstrom et al. (1998) found a mean treatment integrity of just 4% across 29 teachers using several teacher-friendly interventions, with some teachers achieving 0%. This highlights that training alone is insufficient to sustain fidelity."
  },

  "t9": {
    label: "REVIEW",
    stem: "Without documented treatment fidelity, a researcher cannot confidently attribute changes in the target behaviour to the _______.",
    acceptable: ["intervention", "independent variable", "IV", "treatment"],
    feedback: "If we do not know whether the IV was delivered correctly, we cannot claim it caused any observed change in the DV. Fidelity data is not optional in rigorous research or clinical practice."
  },

  // ── SECTION 3: Types of Fidelity Error ───────────────────────────────────

  "t10": {
    section: "Types of Fidelity Error",
    stem: "When a component of the protocol is not implemented at all, this is called an error of _______.",
    acceptable: ["omission"],
    feedback: "Errors of omission occur when prescribed components are missed entirely — for example, failing to deliver a reinforcer, omitting a prompt, or not implementing an error-correction procedure."
  },

  "t11": {
    stem: "When a practitioner delivers a reinforcer for problem behaviour during a DRA procedure, this is an error of _______, because a non-prescribed component has been added.",
    acceptable: ["commission"],
    feedback: "Errors of commission involve implementing procedures that are not part of the protocol. Adding reinforcement for problem behaviour during DRA directly undermines the differential reinforcement contingency."
  },

  "t12": {
    label: "DISCRIMINATION FRAME",
    stem: "During extinction, a therapist accidentally provides attention following problem behaviour. This is an error of _______.",
    acceptable: ["commission"],
    feedback: "The protocol specifies withholding attention; providing it constitutes implementing a non-prescribed procedure — an error of commission. Errors of omission would be failing to implement a step that should have occurred."
  },

  "t13": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner forgets to run the mand training trials specified in the programme for that session. This is an error of _______.",
    acceptable: ["omission"],
    feedback: "Failing to implement a prescribed component is an omission error. Commission errors involve actively doing something not in the protocol."
  },

  "t14": {
    stem: "Vollmer et al. (1999) demonstrated that both omission errors (failing to reinforce alternative behaviour) and commission errors (reinforcing _______ behaviour) disrupted DRA outcomes.",
    acceptable: ["problem", "challenging", "inappropriate"],
    feedback: "This work is important because it showed empirically that both types of fidelity failure produce measurable harm to intervention outcomes — they are not merely technical concerns."
  },

  "t15": {
    label: "INTEGRATION FRAME",
    stem: "A teacher reliably records every instance of a child's on-task behaviour but frequently forgets to deliver the token specified by the reinforcement schedule. The data are trustworthy; the _______ is not.",
    acceptable: ["intervention", "independent variable", "IV", "treatment", "protocol"],
    feedback: "High IOA means the measurement of the DV can be trusted. But if the IV — the token reinforcement schedule — is being implemented inconsistently, any observed change in on-task behaviour cannot be attributed to it. Reliable measurement of an unreliable intervention does not support valid conclusions."
  },

  // ── SECTION 4: Measuring Treatment Fidelity ──────────────────────────────

  "t16": {
    section: "Measuring Treatment Fidelity",
    stem: "Component-based integrity measurement evaluates each step of a protocol independently. A practitioner who completes 8 out of 10 prescribed steps correctly in a session has a component integrity score of _______ percent.",
    acceptable: ["80"],
    feedback: "Component integrity = (steps performed correctly ÷ total steps) × 100. This approach is diagnostically useful because it identifies which specific components are failing, rather than producing a single undifferentiated summary score."
  },

  "t17": {
    stem: "Opportunity-based integrity measurement divides the number of correct responses by the total number of _______ for those responses.",
    acceptable: ["opportunities", "correct plus incorrect", "opportunities to respond"],
    feedback: "Opportunity-based measurement captures whether practitioners respond correctly when occasions to implement a procedure arise — for example, delivering a reinforcer every time the target behaviour occurs versus only some of the time."
  },

  "t18": {
    label: "REVIEW",
    stem: "Component-based measurement is most informative when you need to evaluate the implementation of each _______ step of a protocol.",
    acceptable: ["individual", "separate", "specific"],
    feedback: "Component-based measurement gives a step-by-step picture of which parts of the protocol are being followed correctly. It is more diagnostically useful than a single summary score when the protocol has multiple distinct elements."
  },

  "t19": {
    stem: "Direct observation is the recommended primary method for measuring treatment fidelity, and can be supplemented with _______ products such as written records or completed data sheets.",
    acceptable: ["permanent", "permanent product"],
    feedback: "Permanent products (e.g., completed token boards, session notes, graphed data) provide indirect but useful corroborating evidence. Direct observation remains the gold standard because it captures implementation in real time."
  },

  // ── SECTION 5: Improving Treatment Fidelity ──────────────────────────────

  "t20": {
    section: "Improving Treatment Fidelity",
    stem: "Behavioural Skills Training — comprising instruction, modelling, rehearsal, and feedback — is an evidence-based approach to training staff and is associated with improved _______.",
    acceptable: ["treatment fidelity", "fidelity", "integrity", "treatment integrity", "implementation"],
    feedback: "BST is the recommended approach for training practitioners. It does not rely on didactic instruction alone — active practice and immediate feedback are essential components."
  },

  "t21": {
    stem: "Witt et al. (1997) found that treatment integrity declined sharply during independent implementation after initial training. Integrity was restored only when _______ feedback was reintroduced.",
    acceptable: ["performance", "performance feedback"],
    feedback: "Training alone was not sufficient — it produced an initial gain that did not persist without ongoing feedback. This finding is one of the clearest demonstrations that supervision must be active and data-based, not just an initial induction event."
  },

  "t22": {
    stem: "Performance feedback that focuses only on client outcomes — such as whether the child improved — is less effective than feedback that directly addresses the _______ behaviour of the person implementing the plan.",
    acceptable: ["staff", "implementer", "practitioner", "therapist"],
    feedback: "Client outcomes are influenced by many factors. To improve fidelity, feedback must target the implementer's specific actions: which protocol steps were completed correctly and which were not, anchored to the integrity data."
  },

  "t23": {
    stem: "Fading performance feedback from daily to _______ and biweekly schedules may support maintenance of treatment integrity over time.",
    acceptable: ["weekly"],
    feedback: "Abruptly withdrawing feedback often leads to degradation of fidelity. Systematic fading — moving to weekly then biweekly review — can support maintenance while reducing supervision burden."
  },

  "t24": {
    label: "REVIEW",
    stem: "A supervisor reviews integrity data weekly with a staff member and graphs the results. The data show that one specific protocol step — delivering the error-correction procedure — is consistently omitted. The supervisor provides written and verbal feedback focused specifically on that step. Is this an example of effective performance feedback? (yes/no)",
    acceptable: ["yes"],
    feedback: "Yes. Effective performance feedback is data-based, targets specific implementer behaviours, and is presented in written and graphed form. Targeting a specific omission error directly — rather than providing general encouragement — is exactly what the evidence supports."
  },

  "t25": {
    label: "DISCRIMINATION FRAME",
    stem: "A supervisor gives a staff member general praise after a session ('You did great today!') but provides no data or specific feedback on implementation steps. According to the evidence, this approach is _______ to maintain treatment fidelity over time.",
    acceptable: ["unlikely", "insufficient", "not sufficient", "inadequate"],
    feedback: "Generic praise is not performance feedback. Effective feedback reviews specific integrity data, identifies which components were and were not implemented correctly, and is delivered with reference to the graphed record."
  },

  "t26": {
    label: "INTEGRATION FRAME",
    stem: "A clinician notices that a reinforcement-based intervention is producing no improvement in the target behaviour. Before concluding the intervention is ineffective, the clinician should first examine the _______ data.",
    acceptable: ["treatment fidelity", "fidelity", "integrity", "treatment integrity"],
    feedback: "Poor fidelity can make an effective intervention appear to fail. Ruling out implementation error is a necessary step before modifying or abandoning a protocol. This is why fidelity monitoring is part of ethical practice, not just research methodology."
  },

  // ── SECTION 6: Writing Behaviour Plans ───────────────────────────────────

  "t27": {
    section: "Writing Behaviour Intervention Plans",
    stem: "A well-written behaviour intervention plan supports treatment fidelity by providing _______ operational definitions of each intervention component.",
    acceptable: ["clear", "specific", "precise", "detailed"],
    feedback: "If a BIP is ambiguous, different implementers will interpret it differently, making fidelity measurement almost meaningless. Precision in writing is a prerequisite for precision in implementation."
  },

  "t28": {
    stem: "Expert content validation studies — such as Williams and Vollmer (2015) — help identify the _______ components that should be included in a behaviour intervention plan.",
    acceptable: ["essential", "core", "key", "critical"],
    feedback: "Content validation uses expert consensus to establish what a BIP must contain. This provides an empirical basis for plan evaluation and fidelity checklists, rather than relying on individual clinical judgement."
  },

  "t29": {
    label: "REVIEW",
    stem: "A study reports high IOA throughout but provides no treatment fidelity data. A colleague argues this is acceptable because IOA already demonstrates the intervention was applied consistently. Is the colleague correct? (yes/no)",
    acceptable: ["no"],
    feedback: "No. IOA demonstrates that observers recorded behaviour consistently — it says nothing about whether the intervention was implemented correctly. IOA addresses the DV; treatment fidelity addresses the IV. High IOA with no fidelity data leaves the IV unverified."
  },

  "t30": {
    label: "DISCRIMINATION FRAME",
    stem: "A behaviour plan that lists the goal behaviour and the reinforcer but does not specify the schedule of reinforcement, prompting hierarchy, or error-correction procedure is likely to result in _______ fidelity.",
    acceptable: ["low", "poor", "inconsistent", "variable"],
    feedback: "Incomplete plans create ambiguity. If implementers must make their own decisions about prompting, scheduling, or error correction, different implementers will make different decisions — undermining consistency and fidelity."
  }

};
