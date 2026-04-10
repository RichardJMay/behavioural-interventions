// ch04-evidence-based-practice.js
// Programmed Instruction: Evidence-Based Practice in Behaviour Analysis
// BACB Task List Aligned | ~57 Frames
// Frame prefix: v
// Sections: What is EBP | Systematic Reviews | Quality Indicators |
//           Risk of Bias | Meta-Analysis | Publication Bias |
//           Replication Crisis | Open Science

window.PI_FRAMES = {

  // ── SECTION 1: What is Evidence-Based Practice ────────────────────────────

  "v1": {
    section: "Section 1: Evidence-Based Practice",
    stem: "Evidence-based practice (EBP) involves integrating the best available research evidence with ___________ expertise and client values to inform clinical decisions.",
    acceptable: ["clinical", "practitioner"],
    feedback: "EBP is not simply 'do what the research says' — it requires integrating three components: the best available evidence, the practitioner's clinical expertise, and the values and preferences of the client and their family."
  },

  "v2": {
    stem: "When evaluating the evidence base for an intervention, practitioners should consider the number of studies, the ___________ rate of those studies, the quality of the research, and the populations and settings in which the intervention has been validated.",
    acceptable: ["success", "effect"],
    feedback: "No single study is sufficient. Evidence evaluation requires considering breadth (how many studies), consistency (success rate), quality (methodological rigour), and generalisability (populations and settings)."
  },

  "v3": {
    stem: "The degree to which an intervention has been validated across different populations, settings, and implementers determines its ___________.",
    acceptable: ["generalisability", "generalizability", "external validity", "generality"],
    feedback: "Generalisability — an intervention supported by studies using a narrow, unrepresentative sample may not produce the same effects with a different population or in a different setting."
  },

  "v4": {
    label: "DISCRIMINATION FRAME",
    stem: "An entry-level practitioner chooses an intervention because they are 'drawing on the clinical expertise' of a senior supervisor who has used it for years. Does this satisfy the requirements of Evidence-Based Practice (EBP)? Answer yes or no.",
    acceptable: ["no"],
    feedback: "Correct. While clinical expertise is a pillar of EBP, it cannot be used to bypass the requirement for scientific evidence. Expertise is meant to guide the *application* of established research to specific cases, not to justify the use of unproven or pseudoscientific methods based solely on a senior's 'authority' or personal experience."
  },

  // ── SECTION 2: Systematic Reviews ─────────────────────────────────────────

  "v5": {
    section: "Section 2: Systematic Reviews",
    stem: "A ___________ review involves a systematic search of the literature on a given topic, screening studies against pre-specified inclusion and exclusion criteria, and synthesising the findings.",
    acceptable: ["systematic"],
    feedback: "Systematic reviews differ from narrative reviews in their use of explicit, reproducible methods — pre-specified search strategies, objective eligibility criteria, and structured data extraction — that reduce the risk of reviewer bias."
  },

  "v6": {
    stem: "Systematic reviews differ from narrative or literature reviews in that they use study screening according to clear, agreed, and ___________ inclusion and exclusion criteria.",
    acceptable: ["objective", "pre-specified"],
    feedback: "Objective, pre-specified criteria prevent reviewers from selectively including studies that support a preferred conclusion — a key source of bias in narrative reviews."
  },

  "v7": {
    stem: "Systematic reviews can synthesise evidence from both group experimental designs and ___________ experimental designs, making them well-suited to the behaviour analysis literature.",
    acceptable: ["single-case", "single case", "sced", "single subject"],
    feedback: "Single-case experimental designs are the dominant research methodology in ABA. High-quality systematic reviews of behaviour analytic interventions must include appropriate methods for synthesising SCED evidence."
  },

  "v8": {
    stem: "Pre-registration of a systematic review involves publicly registering the review ___________ — including the research questions, search strategy, and planned analyses — before data collection begins.",
    acceptable: ["protocol"],
    feedback: "A Preregistered protocol prevents post-hoc changes to outcomes, methods, or inclusion criteria after results are known. This is critical because changing these elements after seeing the data introduces bias even if done unconsciously."
  },

  "v9": {
    stem: "A key international register for pre-registering systematic review protocols in health and social care is ___________.",
    acceptable: ["prospero", "PROSPERO"],
    feedback: "PROSPERO — the International Prospective Register of Systematic Reviews — is maintained by the National Institute for Health Research. Registration creates a public record of what was planned, enabling detection of outcome switching."
  },
  
   "v10": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner consults a review of the literature that utilized a pre-published search protocol, applied explicit inclusion/exclusion criteria for all retrieved articles, and conducted a formal risk-of-bias assessment. Is this likely a Systematic Review (SR)? Answer yes or no.",
    acceptable: ["yes"],
    feedback: "Correct. Unlike a narrative review, a Systematic Review (SR) is defined by its transparency and reproducibility. By using pre-specified eligibility criteria and a systematic search strategy, the authors minimize selection bias, allowing other researchers to replicate the review and reach similar conclusions."
  },

  "v11": {
    label: "REVIEW",
    stem: "Name two key features (keywords) that distinguish a systematic review from a narrative literature review.",
    acceptable: ["pre-specified", "objective", "inclusion criteria", "risk of bias", "search strategy", "protocol", "pre-registration"],
    feedback: "Key distinguishing features: keywords (1) pre-specified (objective eligibility criteria for study inclusion) ; (2) objective (3) risk of bias ; (4) pre-registration"
  },

  // ── SECTION 3: Quality Indicators for Systematic Reviews ──────────────────

  "v12": {
    section: "Section 3: Quality Indicators for Systematic Reviews",
    stem: "The ___________ Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) provides a checklist of items that should be reported in a systematic review to ensure methodological transparency.",
    acceptable: ["preferred", "prisma"],
    feedback: "PRISMA — Preferred Reporting Items for Systematic Reviews and Meta-Analyses — is the primary reporting standard. Compliance with PRISMA is an indicator of transparency, though it assesses reporting quality rather than methodological quality directly."
  },

  "v13": {
    stem: "PRISMA includes a flow diagram that documents the number of records identified, screened, assessed for eligibility, and ultimately ___________ in the review.",
    acceptable: ["included"],
    feedback: "The PRISMA flow diagram provides a transparent record of the study selection process — showing exactly how many studies were found, why studies were excluded, and how many were included. This allows readers to evaluate the comprehensiveness of the search."
  },

  "v14": {
    stem: "AMSTAR-2 (A Measurement Tool to Assess Systematic Reviews) is used to evaluate the ___________ quality of a systematic review across multiple domains.",
    acceptable: ["methodological", "overall"],
    feedback: "AMSTAR-2 goes beyond reporting quality to assess the methodological conduct of the review — including the adequacy of the search strategy, the appropriateness of risk of bias assessment, and the handling of heterogeneity."
  },

  "v15": {
    stem: "Does AMSTAR-2 produce a quality score?",
    acceptable: ["no"],
    feedback: "AMSTAR-2 generates a rating of overall quality not a numerical score. The adapted tool the R-AMSTAR produces a score. A critically low AMSTAR-2 rating indicates that the review has critical methodological flaws (e.g., not conducting risk of bias assessment, absence of preregistration) that substantially undermine confidence in its conclusions. The authors of AMSTAR-2 argue that such reviews should not be used as a primary basis for clinical decisions."
  },

  "v16": {
    label: "DISCRIMINATION FRAME",
    stem: "A systematic review is published in a high-impact journal but has not assessed risk of bias in the included studies. Would AMSTAR-2 rate this review highly? Answer yes or no.",
    acceptable: ["no"],
    feedback: "No — failure to assess risk of bias is a critical flaw in AMSTAR-2. Journal impact factor is not a substitute for methodological quality. Risk of bias assessment is essential because without it, the review cannot determine whether observed effects are genuine."
  },

  "v17": {
    stem: "The Cochrane ___________ is an international network of researchers whose systematic reviews are considered among the most methodologically rigorous in healthcare, applying the GRADE framework to evaluate certainty of evidence.",
    acceptable: ["collaboration", "collaborative"],
    feedback: "The Cochrane Collaboration is the gold standard for systematic reviews in healthcare. Cochrane reviews require PRISMA compliance, GRADE evidence ratings, and rigorous risk of bias assessment."
  },

  // ── SECTION 4: Risk of Bias ────────────────────────────────────────────────

  "v18": {
    section: "Section 4: Risk of Bias",
    stem: "Risk of bias refers to potential systematic errors or deviations from the truth in results or inferences. An important component of rigorous systematic reviews is formal ___________ of risk of bias in primary studies.",
    acceptable: ["assessment", "evaluation"],
    feedback: "Risk of bias assessment is what distinguishes high-quality systematic reviews from narrative reviews. Without it, a review cannot determine whether the effects it reports are genuine or artefacts of methodological weaknesses in the primary studies."
  },

  "v19": {
    stem: "The Cochrane Risk of Bias tool (RoB2) is designed for randomised controlled trials. For single-case experimental designs, the ___________ Risk of Bias Tool developed by Reichow, Barton and Maggin (2018) is used.",
    acceptable: ["single case design", "single-case design", "single case", "sced"],
    feedback: "Different research designs require different risk of bias tools. The SCED Risk of Bias Tool was specifically developed to address the unique methodological features and potential biases in single-case experimental design research."
  },

  "v20": {
    stem: "___________ bias refers to systematic differences between the baseline characteristics of groups arising from inadequate randomisation or problematic participant selection criteria.",
    acceptable: ["selection"],
    feedback: "Selection bias — if participants systematically differ at baseline between conditions (e.g., more severe cases in the treatment group), observed effects may reflect these pre-existing differences rather than the intervention."
  },

  "v21": {
    stem: "Participant selection is one source of selection bias — the use of overly restrictive inclusion and exclusion criteria can create a sample that is not representative of the population for whom the intervention is intended, limiting ___________.",
    acceptable: ["generalisability", "generalizability", "external validity", "generalisation", "generality"],
    feedback: "If a clinical study only includes mild cases or those with no co-occurring conditions, the results may not generalise to the more diverse population seen in clinical practice."
  },

  "v22": {
    stem: "___________ bias refers to differences between conditions in the care or exposure to factors other than the intervention itself, including inadequate blinding of participants or implementers.",
    acceptable: ["performance"],
    feedback: "Performance bias — if participants or implementers know which condition they are in, they may behave differently (demand characteristics, expectancy effects), or the intervention may be delivered with different intensity or enthusiasm across conditions."
  },

  "v23": {
    stem: "Procedural ___________ — the degree to which the intervention is delivered as specified in the protocol — is a component of performance bias assessment.",
    acceptable: ["fidelity", "integrity"],
    feedback: "Poor procedural fidelity means the intervention was not delivered as intended, making it impossible to determine whether null or weak effects reflect the intervention's true efficacy or simply inadequate implementation."
  },

  "v24": {
    stem: "___________ bias refers to differences in how outcomes are assessed between conditions, including assessor blinding, selective outcome reporting, dependent variable reliability, and adequacy of data sampling.",
    acceptable: ["detection"],
    feedback: "Detection bias — if assessors know which condition participants are in, their outcome ratings may be influenced by their expectations. Unblinded outcome assessment is a major source of bias, particularly for subjective outcomes."
  },

  "v25": {
    stem: "Interobserver agreement (IOA) is relevant to detection bias because without adequate IOA, the ___________ variable cannot be considered reliably measured.",
    acceptable: ["dependent"],
    feedback: "If the dependent variable is not reliably measured — i.e., different observers produce systematically different scores — the data cannot be trusted as an accurate representation of the behaviour. Adequate IOA is a prerequisite for valid outcome assessment."
  },

  "v26": {
    stem: "Selective ___________ reporting — where studies report only statistically significant or positive outcomes while omitting null or negative findings — is a component of detection bias.",
    acceptable: ["outcome"],
    feedback: "Selective outcome reporting inflates the apparent effectiveness of interventions in the literature. Pre-registration of outcome measures before data collection is the primary solution — any deviation from pre-registered outcomes must be transparently reported."
  },

  "v27": {
    label: "REVIEW",
    stem: "Name the three sources of bias from the Reichow et al. (2008) framework.",
    acceptable: ["selection", "performance", "detection"],
    feedback: "Selection bias (group differences at baseline), performance bias (differential care/exposure/fidelity), and detection bias (differential outcome assessment, IOA, selective reporting). Each represents a distinct threat to internal validity."
  },

  // ── SECTION 5: Meta-Analysis ───────────────────────────────────────────────

  "v28": {
    section: "Section 5: Meta-Analysis",
    stem: "While systematic reviews present a narrative synthesis of evidence, meta-analyses attempt a ___________ synthesis by statistically combining effect sizes from multiple studies.",
    acceptable: ["quantitative", "statistical"],
    feedback: "Meta-analyses pool effect sizes across studies to produce a weighted average estimate with associated confidence intervals — providing greater precision about the likely magnitude of the intervention's effect than any individual study."
  },

  "v29": {
    stem: "A confidence interval in a meta-analysis indicates the range within which the true population effect is likely to fall. A 95% confidence interval means that ___________ % of such intervals constructed across repeated studies would contain the true effect.",
    acceptable: ["95"],
    feedback: "The 95% confidence interval is a frequentist concept — not a probability statement about any particular interval, but a statement about the long-run behaviour of the procedure. Narrower intervals indicate greater precision."
  },

  "v30": {
    stem: "Heterogeneity in a meta-analysis refers to variability in effect sizes ___________ studies that exceeds what would be expected from sampling error alone.",
    acceptable: ["across", "between", "among"],
    feedback: "High heterogeneity means the intervention does not produce consistent effects ACROSS studies — some show large benefits, others small or no benefits. This is clinically important: it suggests the intervention may work well for some populations or contexts but not others."
  },

  "v31": {
    stem: "When heterogeneity is high, it is important to conduct ___________ analyses to explore whether study characteristics such as population, setting, or intervention intensity moderate the effect.",
    acceptable: ["moderator", "subgroup", "moderation"],
    feedback: "Moderator analyses identify the conditions under which an intervention is most effective. High heterogeneity without moderator analysis produces a misleading average — 'on average effective' may obscure that the intervention works well for some and poorly for others."
  },

  // ── SECTION 6: Publication Bias ───────────────────────────────────────────

  "v32": {
    section: "Section 6: Publication Bias",
    stem: "___________ bias is the tendency for studies with statistically significant or positive results to be published, while studies with null or negative results remain unpublished in the 'file drawer'.",
    acceptable: ["publication"],
    feedback: "Publication bias systematically distorts the literature — the published record is not a representative sample of all research conducted. Meta-analyses that do not account for publication bias will overestimate effect sizes."
  },

  "v33": {
    stem: "A funnel plot displays the relationship between study ___________ (on the y-axis) and effect size (on the x-axis). In the absence of bias, the plot should be symmetrical around the pooled effect.",
    acceptable: ["size", "sample size", "precision"],
    feedback: "Larger studies cluster near the true effect size with little variability; smaller studies show more spread. Asymmetry — typically a missing cluster of small studies with null or negative results — suggests publication bias."
  },

  "v34": {
    stem: "An asymmetric funnel plot suggests that smaller studies with ___________ or negative results are missing from the literature, inflating the apparent effect size.",
    acceptable: ["null", "non-significant", "zero"],
    feedback: "The missing lower-left corner of the funnel plot represents small studies that found no effect and were not published. Including these would pull the pooled estimate toward zero, reducing the apparent effectiveness of the intervention."
  },

  "v35": {
    stem: "Although funnel plots are widely used, they have notable limitations — asymmetry can also arise from genuine ___________ (i.e., the intervention working differently in large and small studies) rather than publication bias.",
    acceptable: ["heterogeneity", "moderation", "differences"],
    feedback: "Funnel plot asymmetry has multiple explanations. It can reflect publication bias, but also genuine effect size moderation (small studies done in specialised centres may find larger effects), small study effects, or artefacts of the effect size metric."
  },

  "v36": {
    label: "DISCRIMINATION FRAME",
    stem: "A meta-analysis reports a large pooled effect size, with a funnel plot that is markedly asymmetric. Should the practitioner be cautious about the effect size estimate? Answer yes or no.",
    acceptable: ["yes"],
    feedback: "Yes — an asymmetric funnel plots is suggestive (albeit not conclusive) of potential publication bias, meaning the true effect is likely smaller than the published estimate. The practitioner should seek the bias-corrected effect size estimate and interpret the evidence with appropriate caution."
  },

  "v37": {
    stem: "Trim and fill, Egger's test, and Duval and Tweedie's methods are statistical approaches used to ___________ for publication bias in meta-analyses.",
    acceptable: ["adjust", "correct", "account","control"],
    feedback: "These methods attempt to estimate what the pooled effect would be if the missing studies were included. They produce bias-adjusted effect size estimates that are typically smaller than the unadjusted estimate."
  },

  // ── SECTION 7: Replication Crisis ─────────────────────────────────────────

  "v38": {
    section: "Section 7: The Replication Crisis",
    stem: "The replication crisis refers to the widespread finding that published experiments in psychology and related fields often fail to produce the same results when ___________ by independent researchers.",
    acceptable: ["replicated", "repeated", "reproduced"],
    feedback: "Large-scale replication projects such as the Many Labs Project found that a substantial proportion of published psychological findings failed to replicate, raising concerns about the reliability of the empirical base for practice."
  },

  "v39": {
    stem: "Bishop (2010) identified four factors contributing to irreproducibility as the 'four horsemen': HARKing, p-hacking, publication bias, and insufficient statistical ___________.",
    acceptable: ["power"],
    feedback: "Underpowered studies — those with too few participants to reliably detect the effect of interest — are more likely to produce false positives and inflated effect size estimates. Combined with publication bias, this produces an unreliable literature."
  },

  "v40": {
    stem: "HARKing stands for Hypothesising After the Results are ___________. It involves presenting exploratory, post-hoc findings as if they were theory-driven predictions made before data collection.",
    acceptable: ["known"],
    feedback: "HARKing inflates the evidential value of results by misrepresenting exploratory findings as confirmatory. A hypothesis that was generated after seeing the data has no predictive value — it is guaranteed to fit the data it was derived from."
  },

  "v41": {
    stem: "P-hacking refers to the practice of conducting multiple statistical tests or making flexible analytical decisions until a ___________ result is obtained.",
    acceptable: ["significant", "statistically significant", "positive"],
    feedback: "P-hacking exploits researcher degrees of freedom — decisions about which variables to include, which participants to exclude, or which test to use — to find a p-value below .05. Each additional test inflates the probability of a false positive."
  },

   "v42": {
    stem: "Applied behaviour analysis is not immune to the contingencies that support irreproducibility. Indeed Baer, Wolf and Risley (1987) themselves noted the role of ___________ bias in the ABA literature.",
    acceptable: ["publication"],
    feedback: "In their 1987 follow-up 'Some still-current dimensions of applied behavior analysis,' Baer, Wolf and Risley reflected critically on the field and acknowledged that publication bias — the tendency for positive results to be submitted and accepted over null or mixed findings — represented a systematic distortion in the literature."
  },

  "v43": {
    stem: "Other concerns relevant to ABA include selective ___________ reporting, conflicts of interest, and the incentive structures that reward novel positive findings over systematic replications.",
    acceptable: ["outcome"],
    feedback: "Selective outcome reporting — publishing only the outcomes that worked — is a form of outcome switching that inflates apparent effectiveness. Conflicts of interest (e.g., intervention developers evaluating their own programmes) are also documented in the ABA literature."
  },

  "v44": {
    label: "DISCRIMINATION FRAME",
    stem: "A colleague argues that ABA is immune to the replication crisis because single-case designs use within-subject replication. Is this argument valid? Answer yes or no.",
    acceptable: ["no"],
    feedback: "No. While within-subject replication is a powerful tool for establishing internal validity, it does not protect a field from 'systemic' replication issues. The replication crisis also involves publication bias (the 'file drawer' effect), a lack of direct inter-laboratory replication, and the limited external validity of findings across diverse populations and settings. No single research design is immune to these broader scientific pressures"  },

  // ── SECTION 8: Open Science ────────────────────────────────────────────────

  "v45": {
    section: "Section 8: Open Science",
    stem: "Open science refers to practices that make research transparent and accessible across all phases of the research cycle, enabling the work to be fully evaluated by the scientific community and functioning as a ___________ imperative.",
    acceptable: ["moral", "ethical"],
    feedback: "Open science is not merely a technical practice — it is a moral commitment. Research participants give their time and often discomfort to contribute to knowledge. Obscuring methods or selectively reporting outcomes wastes that contribution and potentially harms future clients."
  },

  "v46": {
    stem: "A key open science practice is ___________ — publicly committing to hypotheses, methods, and planned analyses before data collection begins, to separate confirmatory from exploratory research.",
    acceptable: ["pre-registration", "preregistration", "protocol registration"],
    feedback: "Pre-registration creates a time-stamped record of what was planned before data were collected. It allows readers to distinguish findings that were genuinely predicted (confirmatory) from those that emerged from exploratory analysis (hypothesis-generating)."
  },

  "v47": {
    stem: "Pre-registration does not prevent ___________ analyses — researchers can still explore their data. The requirement is that exploratory findings are clearly labelled as such, not presented as confirmatory.",
    acceptable: ["exploratory", "post-hoc"],
    feedback: "Pre-registration separates, rather than prohibits, exploratory analysis. Exploratory findings are valuable — they generate hypotheses for future confirmatory research. The problem arises when they are dressed up as confirmatory."
  },

  "v48": {
    stem: "___________ reports are a publication format in which journals commit to publishing a study based on the quality of the introduction and methods, before results are known — removing the incentive to produce positive findings.",
    acceptable: ["registered"],
    feedback: "Registered reports directly address publication bias by decoupling the publication decision from the results. A study accepted at Stage 1 (pre-data) will be published regardless of whether results are positive, null, or negative — as long as the pre-registered protocol was followed."
  },

  "v49": {
    stem: "Open ___________ involves making the raw data from a study publicly available in a repository, allowing independent researchers to verify analyses and conduct secondary analyses.",
    acceptable: ["data"],
    feedback: "Open data enables post-publication scrutiny — errors, analytical irregularities, and data fabrication can be detected when data are available for inspection. It also maximises the scientific value of data by enabling reuse."
  },

  "v50": {
    stem: "Open ___________ involves sharing the materials used in a study — stimuli, coding manuals, intervention protocols — so that others can accurately replicate the procedures.",
    acceptable: ["materials"],
    feedback: "Without access to the actual materials used, replication is approximate at best. Open materials are particularly important in ABA, where procedural fidelity is critical and small variations in how a procedure is implemented can substantially affect outcomes."
  },

  "v51": {
    stem: "Open ___________ involves sharing analysis code (e.g., R scripts, SPSS syntax) so that the analytical pathway from raw data to reported results can be independently verified.",
    acceptable: ["analysis", "code", "data analysis"],
    feedback: "Computational reproducibility — the ability to exactly reproduce reported results from shared data and code — is a minimal transparency standard. Errors in analysis are surprisingly common and open code enables their detection and correction."
  },

  "v52": {
    stem: "The UK Reproducibility Network (UKRN) and organisations such as the Center for Open Science promote open science norms and provide infrastructure — including the ___________ Science Framework — for sharing data, materials, and pre-registrations.",
    acceptable: ["open", "osf"],
    feedback: "The Open Science Framework (OSF) is a free platform for pre-registration, data sharing, and materials sharing. It is widely used in psychology and increasingly in behaviour analysis. Pre-registrations on OSF are time-stamped and publicly accessible."
  },

  "v53": {
    label: "DISCRIMINATION FRAME",
    stem: "A researcher pre-registers their study but then analyses additional outcome variables that were not pre-registered. Is this acceptable?  Answer yes or no.",
    acceptable: ["Yes"],
    feedback: "Yes — as long as the additonal analyses are labelled as such (i.e.,exploratory) Pre-registration is designed to protect against selective reporting and undeclared outcome switching thorugh a verifiable record. The researcher must transparently report which analyses were pre-registered and which were exploratory. Registered reports with editorial oversight provide stronger protection because deviation from the pre-registered protocol requires justification to the editor."
  },

  // ── SECTION 9: Being a Sceptical Consumer ────────────────────────────────

  "v54": {
    section: "Section 9: Being a Sceptical Consumer of the Literature",
    stem: "Being a sceptical consumer of the literature means not accepting reported findings at face value but evaluating the ___________ quality, potential biases, and generalisability of each study.",
    acceptable: ["methodological", "evidence", "scientific", "experimental"],
    feedback: "methodological or scientific quality! Sceptical consumption is not cynicis, it is the application of critical appraisal skills. Even published, peer-reviewed research may have methodological weaknesses, be subject to publication bias, or limited generalisability that affect its clinical applicability."
  },

  "v55": {
    stem: "When appraising a systematic review, practitioners should check whether the review used pre-specified eligibility criteria, conducted a risk of bias assessment, and considered ___________  bias.",
    acceptable: ["publication"],
    feedback: "These are the three of the most critical features of a high-quality systematic review for clinical decision-making. A review missing any of these should be interpreted with caution."
  },

  "v56": {
    stem: "When appraising a meta-analysis, practitioners should examine the funnel plot for asymmetry, consider the degree of ___________ across studies, and check whether bias-adjusted effect size estimates are reported.",
    acceptable: ["heterogeneity", "variation"],
    feedback: "High heterogeneity means the pooled effect size may not accurately represent what happens in any specific context. Bias-adjusted estimates (e.g., from trim-and-fill) provide a more conservative and likely more accurate picture of the true effect."
  },

  "v57": {
    stem: "Practitioners should consider whether the populations, settings, and outcome measures used in published research match their own clinical context — known as ___________  validity.",
    acceptable: ["external", "ecological"],
    feedback: "External validity — the degree to which findings generalise beyond the specific study conditions. An intervention with strong internal validity (demonstrated experimental control) may still have limited external validity if the study conditions are far removed from clinical practice."
  },

};
