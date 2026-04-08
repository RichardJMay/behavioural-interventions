// ch05-selecting-interventions.js
// Programmed Instruction: Selecting Intervention Goals and Strategies
// BACB Task List Aligned | ~57 Frames
// Frame prefix: g
// Sections: Goal Selection | Writing Goals | Selecting Interventions |
//           FBA Linkage | Least Restrictive / Risk | Social Validity |
//           Choice | Clinical Expertise | Integration

window.PI_FRAMES = {

  // ── SECTION 1: Selecting Intervention Goals ───────────────────────────────

  "g1": {
    section: "Section 1: Selecting Intervention Goals",
    stem: "When selecting intervention goals, practitioners must consider variables associated with the individual, people who support the individual, environmental influences, and other contextual ___________ that may affect goal selection.",
    acceptable: ["factors", "considerations", "variables"],
    feedback: "Goal selection is an ecological process — it requires consideration of the full context including the individual's characteristics, their support network, the environment, and the broader system in which intervention will occur."
  },

  "g2": {
    stem: "Intervention goals should address the learner's broader ___________, not focus exclusively on reducing problem behaviour.",
    acceptable: ["repertoire", "skills", "habilitation", "adaptive skills"],
    feedback: "Goals should be habilitative — focused on building useful, meaningful skills that expand the learner's repertoire and increase their quality of life, not merely eliminating problem behaviour."
  },

  "g3": {
    stem: "A goal that focuses exclusively on reducing problem behaviour without identifying a replacement skill is described as ___________ rather than habilitative.",
    acceptable: ["reductive", "reduction-focused", "non-habilitative"],
    feedback: "Reductive goals alone are insufficient. Habilitative goals increase access to reinforcement and build adaptive behaviour alongside reducing problem behaviour — they describe what the learner will do, not just what they will stop doing."
  },

  "g4": {
    stem: "Intervention goals should increase the learner's access to ___________, making the environment more rewarding and motivating for appropriate behaviour.",
    acceptable: ["reinforcement", "reinforcers"],
    feedback: "A core criterion for goal selection is that achieving the goal opens up new sources of reinforcement in the learner's natural environment — this is what makes skill gains durable and self-sustaining."
  },

  "g5": {
    stem: "The degree to which goals are appropriate and meaningful for the individual whose behaviour is being changed is referred to as ___________ validity.",
    acceptable: ["social"],
    feedback: "Social validity — goals must be meaningful to the individual and valued by those around them. Goals that are technically achievable but not valued in the learner's natural environment will not be maintained after the intervention ends."
  },

  "g6": {
    stem: "Goals should be prioritised according to their importance to the individual, this includes the ___________ of the behaviour on relationships across contexts.",
    acceptable: ["impact"],
    feedback: "Prioritisation requires balancing multiple considerations; however the importance to the individual — not just the convenience of caregivers — must be a primary consideration."
  },

  "g7": {
    stem: "Goals should be ___________ appropriate — supporting meaningful participation and wellbeing and taking account of existing skills repertoires.",
    acceptable: ["developmentally"],
    feedback: "Goals should be developmentally appropriate and neurodiversity-affirming — supporting meaningful participation, autonomy, and wellbeing rather than conformity to typical norms"
  },

  "g8": {
    stem: "Goals should be ___________ within the learner's current context and maintainable over time without requiring unsustainable levels of support.",
    acceptable: ["acheiveable"],
    feedback: "Attainability and sustainability are practical constraints. A goal that requires constant one-to-one support to maintain will not be sustained in the natural environment. Goals must be achievable under conditions that can realistically be maintained."
  },

  "g9": {
    stem: "Goals should ideally build on strengths and skills already in the learner's ___________, rather than exclusively targeting deficits.",
    acceptable: ["repertoire", "existing repertoire", "current repertoire"],
    feedback: "Existing skills provide a foundation for new learning and increase the likelihood of early success — which is itself reinforcing for both the learner and the implementer. Deficit-only framing misses opportunities to leverage strengths."
  },

  "g10": {
    stem: "Goals that are ___________ integrated consider how current targets fit within a longer-term progression of skills across the individual's life and developmental trajectory.",
    acceptable: ["longitudinally", "longitudinal"],
    feedback: "Longitudinal integration — goals are not selected in isolation but as part of a coherent long-term plan. Each goal should build toward meaningful outcomes across the individual's development, not just address the immediate presenting concern."
  },

  "g11": {
    stem: "Behaviours that, when acquired, open up access to new environments, contingencies, and learning opportunities — producing broad and rapid changes across the learner's repertoire — are called behavioural ___________.",
    acceptable: ["cusps", "cusp", "behavioral cusps"],
    feedback: "Behavioural cusps are prerequisites that unlock disproportionately large repertoire changes. Targeting cusps (e.g., functional communication, joint attention) maximises the impact of intervention by opening up access to new learning experiences."
  },

  "g12": {
    label: "REVIEW",
    stem: "Goals should involve input from the __________, as well as caregivers, stakeholders, and relevant professionals — not be determined solely by the practitioner.",
    acceptable: ["person","learner", "client"],
    feedback: "Collaborative goal setting ensures the goals are meaningful in the learner's natural environment and are supported by those responsible for day-to-day implementation. Goals set without input from the person themselves are less likely to be prioritised or maintained."
  },

  // ── SECTION 2: Writing Intervention Goals ─────────────────────────────────

  "g13": {
    section: "Section 2: Writing Intervention Goals",
    stem: "Without well-written definitions of target behaviours, ongoing ___________ of those behaviours becomes unreliable.",
    acceptable: ["evaluation", "measurement", "assessment", "monitoring"],
    feedback: "Operational definitions are the foundation of reliable measurement. Without them, different observers may record different things, making it impossible to determine whether behaviour is changing in the desired direction."
  },

  "g14": {
    stem: "Target behaviour definitions must be ___________ — describing the observable characteristics of the behaviour including complete information about both occurrence and non-occurrence.",
    acceptable: ["operational", "operationalised"],
    feedback: "Operational definitions specify exactly what the behaviour looks like when it occurs and when it does not. This enables consistent application across settings, implementers, and time points."
  },

  "g15": {
    stem: "An operational definition should be ___________, meaning it refers to observable characteristics of the behaviour and avoids inferential terms such as 'intended to' or 'tries to'.",
    acceptable: ["objective"],
    feedback: "Inferential terms require the observer to speculate about internal states rather than describe what can be directly observed. Only observable events can be reliably and consistently measured (i.e., objective)."
  },

  "g16": {
    stem: "A definition is ___________ if it is unambiguous and can be readily paraphrased by independent observers who arrive at the same understanding.",
    acceptable: ["clear", "objective"],
    feedback: "Clear and objective definitions ensure that any trained observer reading the definition would identify the same instances of the behaviour. Ambiguity directly undermines interobserver agreement (IOA) and therefore measurement reliability."
  },

  "g17": {
    stem: "An operational definition that is ___________ delineates the boundaries of what is included in the target behaviour and what is excluded — preventing boundary cases from being recorded inconsistently.",
    acceptable: ["complete"],
    feedback: "Complete! — the definition specifies the full range of responses that count as instances of the target behaviour and those that do not. Without this, observers may systematically differ in how they handle ambiguous cases."
  },

  "g18": {
    label: "REVIEW",
    stem: "The three essential properties of a good target behaviour definition are that it must be objective, clear, and ___________.",
    acceptable: ["complete"],
    feedback: "Objective (observable, not inferential), clear (unambiguous, paraphrasable), complete (boundaries specified). These three properties together enable reliable, consistent measurement across observers, settings, and time."
  },

  "g19": {
    stem: "A ___________ -based definition defines the behaviour by its environmental effect or outcome — such as 'number of items recycled' — capturing all topographies that produce that outcome.",
    acceptable: ["function", "function-based"],
    feedback: "Function-based definitions are useful when the clinically relevant characteristic is the outcome produced by the behaviour, regardless of how it is physically performed. They are often more natural and socially valid than topographical definitions."
  },

  "g20": {
    stem: "A ___________ -based definition describes the physical form of the behaviour — such as 'any contact of the closed fist with any part of the body' — regardless of its environmental effect.",
    acceptable: ["topography", "topography-based", "topographical"],
    feedback: "Topography-based definitions are useful when the form of the behaviour is what matters clinically — for example, when distinguishing between different types of self-injurious behaviour that may have different functions."
  },

  "g21": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner defines aggression as 'any behaviour that upsets another person.' Is this an objective definition? Answer yes or no.",
    acceptable: ["no"],
    feedback: "No — 'upsets another person' is inferential and subjective. It requires the observer to infer an internal state in another person rather than describing directly observable behaviour. Two observers could disagree substantially on whether a given response 'upset' someone."
  },

  // ── SECTION 3: Selecting Interventions — Overview ─────────────────────────

  "g22": {
    section: "Section 3: Selecting Interventions — Overview",
    stem: "When selecting intervention strategies, practitioners must consider ethical and professional standards, the evidence base, assessment results, consumer choice and consent, the least restrictive alternative, and ___________ fit.",
    acceptable: ["contextual"],
    feedback: "Contextual fit — the degree to which the intervention is feasible, acceptable, and sustainable within the specific setting and resources. An intervention that cannot be implemented with fidelity in the natural environment is unlikely to be effective regardless of its evidence base."
  },

  "g23": {
    stem: "By BACB ethical standards, developing an intervention without first conducting a ___________ is considered unethical, as it risks producing ineffective or even harmful outcomes.",
    acceptable: ["functional behaviour assessment", "fba", "functional assessment"],
    feedback: "The BACB requires that interventions be linked to functional assessment results. Skipping the FBA and proceeding directly to intervention is an ethical violation — not merely a technical shortcut — because it may inadvertently reinforce the problem behaviour."
  },

  "g24": {
    stem: "The principle of least ___________ alternative requires that practitioners select the least intrusive intervention that is likely to be effective, while affording more benefit than risk.",
    acceptable: ["restrictive", "intrusive"],
    feedback: "The least restrictive alternative principle is not simply about mildness — it requires genuine cost-benefit analysis. A mild intervention that is ineffective may ultimately cause more harm than a more intrusive intervention that produces rapid, durable change."
  },

  "g25": {
    stem: "Both consent and ___________ are required before implementing assessment or intervention. These can come from legal decision-makers; assent comes from the individual themselves where possible.",
    acceptable: ["assent"],
    feedback: "Consent (from guardians/legal decision-makers) and assent (from the individual) are both ethical requirements. Assent recognises that even individuals who cannot provide legal consent have a right to participate in decisions about their own care and involvement in behavioural interventions."
  },

  // ── SECTION 4: Incorporating FBA Data ────────────────────────────────────

  "g26": {
    section: "Section 4: Incorporating FBA Data into Intervention Selection",
    stem: "Developing function-based interventions should be conceptualised as a three-step process: define the problem, determine ___________ the problem occurs via FBA, and develop an intervention logically linked to the FBA results.",
    acceptable: ["why", "the reason"],
    feedback: "The three-step process — define, assess, intervene — ensures that interventions target the variables actually responsible for the behaviour rather than applying generic strategies without understanding the function."
  },

  "g27": {
    stem: "It is not uncommon for practitioners working in education to proceed from Step 1 (defining the problem) directly to Step 3 (developing an intervention), bypassing the ___________. Common examples include generalised token economies, time-out, and exclusion from school.",
    acceptable: ["fba", "functional assessment", "functional behaviour assessment"],
    feedback: "Without FBA data, there is no basis for determining whether these interventions are likely to be effective."
  },

  "g28": {
    stem: "Without FBA data, interventions are less likely to be ___________ -based, because practitioners tend to focus on reducing behaviour and society generally favours punishment-based approaches.",
    acceptable: ["reinforcement", "function"],
    feedback: "Skipping the FBA removes the information needed to identify what reinforcers maintain the behaviour. Without this, it is much less likely that the intervention will arrange the right contingencies to produce durable, meaningful change."
  },


  "g29": {
    stem: "Even if problem behaviour does change without FBA-based intervention, any change is likely to be ___________ because the maintaining contingencies remain in place.",
    acceptable: ["temporary", "short-lived", "brief", "short", "not durable"],
    feedback: "Without addressing the variables that produced and maintain the behaviour, change is not durable. The maintaining contingencies continue to operate, and the behaviour is likely to return when intervention is withdrawn or conditions change."
  },

  "g30": {
    stem: "When linking FBA results to intervention, the practitioner considers how ___________ events and antecedents can be changed to make problem behaviour less likely and appropriate behaviour more likely.",
    acceptable: ["setting", "establishing"],
    feedback: "FBA linkage involves the full three-term contingency — setting events, antecedents, and consequences. Effective function-based interventions typically address multiple components of the maintaining contingency, not just one."
  },

  "g31": {
    stem: "The practitioner also asks how reinforcement for problem behaviour can be ___________, and how the same or equivalent reinforcement can be arranged contingent on appropriate behaviour.",
    acceptable: ["stopped", "withheld", "eliminated"],
    feedback: "Withholding reinforcement for problem behaviour (extinction) while making the same reinforcement available for appropriate behaviour is the core logic of function-based intervention — addressing the maintaining contingency from both sides."
  },

  // ── SECTION 5: Least Restrictive Alternative and Risk Assessment ──────────

  "g32": {
    section: "Section 5: Least Restrictive Alternative and Risk Assessment",
    stem: "The principle of the least restrictive alternative requires that practitioners choose intervention strategies that afford more ___________ than risk.",
    acceptable: ["benefit", "benefits"],
    feedback: "The least restrictive alternative is not simply about using the mildest procedure. It requires a genuine cost-benefit analysis — a mildly intrusive but ineffective intervention may ultimately cause more harm than a more intensive but rapidly effective one."
  },

  "g33": {
    stem: "The least restrictive alternative also requires that intervention strategies cause the least amount of ___________ to the individual and provide the maximum amount of choice in treatment selection.",
    acceptable: ["distress", "disruption"],
    feedback: "Three criteria must all be met: more benefit than risk, least distress, and maximum choice. These are distinct — an intervention can be low-distress but still not offer meaningful choice, or offer choice but carry unacceptable risks."
  },

  "g34": {
    stem: "A risk assessment is a compilation of ethical considerations and safety precautions organised into a formal ___________-making process before implementing an assessment or intervention.",
    acceptable: ["decision"],
    feedback: "A formal risk assessment is a decision-making process that systematises safety considerations rather than leaving them to informal judgement. It ensures risks are explicitly identified, evaluated, and addressed before intervention begins — not after a problem has occurred."
  },

  "g35": {
    stem: "According to Wiskirchen, Deochand and Peterson (2017), a formal risk assessment should include a statement of the ___________ experience of those implementing the intervention.",
    acceptable: ["clinical", "practical"],
    feedback: "The clinical experience of implementers is a key risk factor — complex, potentially dangerous, or ethically sensitive interventions require experienced, trained practitioners. Assigning a novel or high-risk procedure to an inexperienced implementer is itself a risk."
  },

  "g36": {
    stem: "A formal risk assessment also requires consideration of the intensity, ___________, and duration of the problem behaviour, and whether the assessment or treatment context is safe.",
    acceptable: ["frequency", "rate", "amount"],
    feedback: "Severity indicators — intensity, frequency, and duration — determine the level of risk associated with both the problem behaviour and the proposed intervention. High-intensity, high-frequency behaviour requires more careful risk planning."
  },

  "g37": {
    label: "REVIEW",
    stem: "The least restrictive alternative principle requires that interventions afford more benefit than risk, cause the least ___________ to the individual, and maximise choice.",
    acceptable: ["distress", "harm", "disruption"],
    feedback: "All three criteria must be considered: (1) more benefit than risk — genuine cost-benefit analysis; (2) least distress — minimising the aversive properties of the intervention; (3) maximum choice — respecting autonomy and self-determination."
  },

  // ── SECTION 6: Social Validity ────────────────────────────────────────────

  "g38": {
    section: "Section 6: Social Validity",
    stem: "Social validity refers to the extent to which target behaviours are appropriate (___________ ), interventions are acceptable (procedures), and important changes are produced (outcomes).",
    acceptable: ["goals"],
    feedback: "Wolf (1978) described three levels of social validity. Goals — are we targeting the right behaviours? Procedures — are the methods acceptable to those involved? Outcomes — did the intervention produce changes that matter in the real world?"
  },

  "g39": {
    stem: "Social validity is sometimes called clinical importance, applied significance, ecological validity, or ___________ change.",
    acceptable: ["qualitative"],
    feedback: "Multiple terms are used across the literature: clinical importance, applied significance, ecological validity, and qualitative change. All refer to the same question: does the intervention produce changes that are meaningful to the individual and those around them and not determined by statistical or graphical significance?"
  },

  "g40": {
    stem: "Those who should evaluate the acceptability of interventions include the ___________, parents or guardians, and relevant agencies or schools — not solely the practitioner.",
    acceptable: ["learners", "clients", "individuals", "person", "learner", "Individual"],
    feedback: "Learners themselves — not just their caregivers — should have a role in evaluating acceptability. This reflects the principle of self-determination and recognises that individuals have unique knowledge about what they experience as aversive or acceptable."
  },

  "g41": {
    stem: "___________ comparisons establish social validity by observing people considered competent and identifying appropriate target behaviours based on what typical peers do.",
    acceptable: ["normative", "norm-referenced"],
    feedback: "Normative comparisons use typical performance as a benchmark. However, this approach is problematic when 'typical' is poorly defined, when the comparison group is inappropriate, or when the goal of intervention is to support the individual to be themselves rather than to conform to a norm (e.g., neurodiversity-affirming)."
  },


  "g42": {
    stem: "The Treatment Evaluation Inventory (TEI) is a questionnaire used to rate the ___________ of interventions, originally developed for parents rating treatments in outpatient clinic settings.",
    acceptable: ["acceptability", "social validity"],
    feedback: "The TEI and its short form (TEI-SF) capture parent and caregiver perceptions of treatment acceptability — a critical perspective given that caregivers are often the primary implementers and their buy-in directly affects treatment fidelity."
  },

  // ── SECTION 7: Choice ─────────────────────────────────────────────────────

  "g43": {
    section: "Section 7: Incorporating Choice",
    stem: "Practitioners should always consider providing treatment ___________ to the individual — particularly when two or more interventions are likely to produce equivalent benefit.",
    acceptable: ["choices", "choice"],
    feedback: "When interventions are equally effective, learner or family preference should guide selection. Imposing a procedure when an equally effective alternative preferred by the learner exists is difficult to justify ethically."
  },

  "g44": {
    stem: "Providing treatment choices is consistent with the ethical principle of respecting ___________ — the individual's right to make decisions about their own life and care.",
    acceptable: ["autonomy", "self-determination"],
    feedback: "Autonomy and self-determination are core ethical principles in applied behaviour analysis. Interventions imposed without regard for individual preference undermine dignity and self-determination regardless of their effectiveness."
  },

  "g45": {
    stem: "Research indicates that individuals generally prefer situations in which they have choice, and that providing choice is associated with greater treatment ___________ and less attrition.",
    acceptable: ["adherence", "acceptability", "compliance", "engagement"],
    feedback: "Choice provision has both ethical and practical benefits. When individuals or families have chosen the intervention, they are more likely to implement it consistently, remain engaged, and report satisfaction — directly improving outcomes."
  },

  "g46": {
    stem: "___________ evaluations involve presenting two concurrent schedules and observing which option the individual selects, providing a direct behavioural measure of preference rather than relying on verbal report alone.",
    acceptable: ["concurrent-chains", "concurrent chains", "concurrent-chain schedules"],
    feedback: "Concurrent-chains evaluations provide a direct, non-verbal measure of preference — particularly valuable with individuals who cannot communicate vocally. They offer a more valid measure of social validity than questionnaires for some populations."
  },

  "g47": {
    stem: "Offering choice can also provide a direct measure of ___________ validity — the individual's selection of one procedure over another is itself evidence that the chosen procedure is preferred and therefore more acceptable.",
    acceptable: ["social"],
    feedback: "Choice is simultaneously an ethical practice and a measurement tool. The procedure the individual selects provides direct evidence of their preference — a behavioural rather than verbal measure of social validity."
  },

  "g48": {
    label: "REVIEW",
    stem: "Providing treatment choices is associated with greater treatment acceptability, better treatment adherence, less ___________, and constitutes a direct measure of social validity.",
    acceptable: ["attrition", "dropout"],
    feedback: "Four benefits: (1) greater acceptability, (2) better adherence, (3) less attrition, (4) direct social validity measure. Together these practical benefits — alongside the ethical imperative — make choice provision a core component of best practice."
  },

  // ── SECTION 8: Clinical Expertise ────────────────────────────────────────

  "g49": {
    section: "Section 8: Clinical Expertise",
    stem: "Clinical expertise is the application of specialist knowledge, experience, and judgement to ensure that the best available evidence is applied appropriately within a specific clinical ___________.",
    acceptable: ["context", "situation", "recommendation"],
    feedback: "Evidence-based practice requires three components: best available evidence, clinical expertise, and client values made within a specific clinical context. Clinical expertise is what bridges the general evidence base and the specific individual — they are distinct competencies and both are required."
  },

  "g50": {
    stem: "According to Slocum et al. (2014), expert behaviour analytic practice requires identification of important behavioural problems, recognition of underlying behavioural processes, weighing of evidence, implementing treatments in complex social contexts, and ongoing ___________ decision-making.",
    acceptable: ["data-based", "data based"],
    feedback: "Data-based decision making is a defining feature of behaviour analytic practice — ongoing measurement guides whether interventions are working and informs decisions about continuation, modification, or change. This is what distinguishes behaviour analysis from approaches relying on clinical impression alone."
  },

  "g51": {
    stem: "Slocum et al. (2014) identified knowledge and application of the research literature as one component of clinical expertise, alongside incorporation of the ___________ system of behaviour analysis.",
    acceptable: ["conceptual", "theoretical"],
    feedback: "The conceptual system — the theoretical framework of behaviour analysis — is not separate from practice but integral to it. Practitioners who understand the conceptual basis of procedures can adapt and troubleshoot; those following rote protocols cannot."
  },

  "g52": {
    stem: "Clinical expertise also includes interpersonal skills, prioritisation of client values and context, recognition of the need for outside ___________, and commitment to ongoing professional development.",
    acceptable: ["consultation", "supervision"],
    feedback: "Knowing when to seek consultation is itself a marker of expertise. No practitioner can be expert in all areas — appropriate use of specialist consultation and supervision is an ethical and professional requirement, not a sign of inadequacy."
  },

  "g53": {
    stem: "Being ___________ to client values and context — understanding what matters to the individual and their family and how it shapes treatment decisions — is identified by Slocum et al. as a core component of clinical expertise.",
    acceptable: ["responsive", "sensitive"],
    feedback: "Responsiveness to client values integrates social validity considerations into clinical expertise. The best evidence-based intervention is not the one with the largest effect size in the literature — it is the one that fits the individual's values, context, and priorities."
  },

  // ── SECTION 9: Integration ─────────────────────────────────────────────────

  "g54": {
    section: "Section 9: Integration",
    stem: "A practitioner is selecting an intervention for a learner's problem behaviour. The first step is to conduct a ___________ to identify the variables maintaining the behaviour.",
    acceptable: ["functional behaviour assessment", "fba", "functional assessment"],
    feedback: "FBA first — without identifying the maintaining contingencies, intervention selection is speculative and may produce harmful outcomes. By BACB standards, this is not merely good practice but an ethical requirement."
  },

  "g55": {
    stem: "The practitioner identifies that the behaviour is escape-maintained. They propose escape extinction. Under the least restrictive alternative principle, they must also demonstrate that the intervention provides more ___________ than risk.",
    acceptable: ["benefit", "benefits"],
    feedback: "Even when an intervention is function-based and evidence-supported, the least restrictive alternative principle requires a genuine cost-benefit evaluation. Escape extinction can be associated with significant extinction bursts and must be accompanied by appropriate risk planning."
  },

  "g56": {
    stem: "Before implementing the intervention, the practitioner obtains consent from the family and seeks ___________ from the learner.",
    acceptable: ["assent"],
    feedback: "Consent (from legal decision-makers) and assent (from the individual) are both required. Seeking assent — even when the learner cannot provide legal consent — respects their right to participate in decisions about their own care."
  },

  "g57": {
    stem: "After implementing the intervention, the practitioner measures ___________ validity by asking the learner, family, and school whether the goals were appropriate, the procedures were acceptable, and the outcomes were meaningful.",
    acceptable: ["social"],
    feedback: "Social validity assessment closes the loop. It ensures that clinical success — measurable behaviour change — aligns with what actually matters to the stakeholders whose lives are affected by the intervention."
  },

};
