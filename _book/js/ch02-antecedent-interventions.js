// ch02-antecedent-interventions.js
// Programmed Instruction: Antecedent Interventions
// BACB Task List Aligned | 84 Frames
// Sections: Defining/Classifying | NCR | High-p | FCT | Default | IISCA | SBT

window.PI_FRAMES = {

  // ── SECTION 1: Defining and Classifying Antecedent Interventions ──────────

  "a1": {
    section: "Section 1: Defining and Classifying Antecedent Interventions",
    stem: "In the three-term contingency, the antecedent precedes the behaviour. An antecedent intervention is implemented ___________ to and independent of the target behaviour's occurrence.",
    acceptable: ["prior", "before"],
    feedback: "Antecedent interventions are implemented before the behaviour occurs — they operate on the conditions that precede behaviour rather than on the consequences that follow it."
  },

  "a2": {
    stem: "Because antecedent interventions are implemented before the behaviour occurs, they operate on the ___________ that set the occasion for behaviour rather than on consequences.",
    acceptable: ["conditions", "antecedents", "variables", "stimuli"],
    feedback: "Antecedent interventions target the conditions that precede and evoke behaviour — motivating operations, discriminative stimuli, and setting events — rather than the consequences that follow it."
  },

  "a3": {
    stem: "Smith (2011) identified two broad categories of antecedent intervention. The first category — ___________ antecedent interventions — directly manipulates at least one component of the contingency maintaining the problem behaviour.",
    acceptable: ["function-based", "function based"],
    feedback: "Function-based antecedent interventions are derived from functional assessment. They target the specific motivating operations, discriminative stimuli, or reinforcement contingencies identified as maintaining the problem behaviour."
  },

  "a4": {
    stem: "The second broad category — ___________ interventions — does not depend on identifying the specific variables that evoke or maintain the problem behaviour.",
    acceptable: ["default"],
    feedback: "Default antecedent interventions can be applied without knowing the function of the behaviour. Examples include antecedent exercise and enriched environments."
  },

  "a5": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner identifies that a learner's behaviour is maintained by avoidance of demands, and then implements NCR with brief no-demand periods on a fixed-time schedule. Is this a function-based or default antecedent intervention?",
    acceptable: ["function-based", "function based"],
    feedback: "Function-based — the intervention (NCR with escape) was derived from the functional analysis result. It directly targets the identified maintaining contingency (escape reinforcement)."
  },

  "a6": {
    stem: "Antecedent interventions can also be classified by whether they require differential consequences to produce behaviour change. Interventions that do not depend on differential consequences are called contingency-___________ antecedent interventions.",
    acceptable: ["independent"],
    feedback: "Contingency-independent antecedent interventions produce behaviour change without requiring differential reinforcement or punishment contingencies. NCR is an example — it is delivered on a time-based schedule regardless of behaviour."
  },

  "a7": {
    stem: "Interventions that depend on differential consequences for the target or alternative behaviour in the presence or absence of the antecedent are called contingency-___________ antecedent interventions.",
    acceptable: ["dependent"],
    feedback: "Contingency-dependent antecedent interventions require differential consequences to work — for example, FCT requires that the communicative response produces the reinforcer and the problem behaviour is placed on extinction."
  },

  "a8": {
    label: "DISCRIMINATION FRAME",
    stem: "NCR delivers a reinforcer on a fixed-time schedule regardless of what the learner does. FCT requires the learner to emit a communicative response to produce the reinforcer. Which is contingency-independent",
    acceptable: ["ncr"],
    feedback: "NCR is contingency-independent — reinforcement is delivered regardless of behaviour. FCT is contingency-dependent — reinforcement is contingent on the communicative response, and extinction is applied to the problem behaviour."
  },

  "a9": {
  label: "REVIEW",
  stem: "Antecedent interventions that manipulate components of the identified maintaining contingency are called ___________ -based interventions.",
  acceptable: ["function", "function-based"],
  feedback: "Function-based antecedent interventions directly target the variables identified through functional assessment — they are logically linked to the maintaining contingency."
},

"a9b": {
  label: "REVIEW",
  stem: "Antecedent interventions that reduce behaviour regardless of its function, without requiring knowledge of the maintaining variables, are called ___________ interventions.",
  acceptable: ["default"],
  feedback: "Default interventions work across functions — they do not require functional assessment to implement. Examples include antecedent exercise and enriched environments. Their advantage is broad applicability; their limitation is that they are less precisely targeted than function-based approaches."
},
  // ── SECTION 2: Noncontingent Reinforcement (NCR) ─────────────────────────

  "a10": {
    section: "Section 2: Noncontingent Reinforcement (NCR)",
    stem: "NCR is an antecedent intervention in which stimuli with known reinforcing properties are delivered on a ___________ or variable-time (VT) schedule independent of the learner's behaviour.",
    acceptable: ["fixed-time", "fixed time", "ft"],
    feedback: "NCR uses time-based schedules — fixed-time (FT) or variable-time (VT) — to deliver reinforcers independent of the learner's behaviour. The reinforcer is delivered when the interval elapses, not when a specific behaviour occurs."
  },

  "a11": {
    stem: "The definition of NCR refers to 'stimuli with known reinforcing properties' rather than simply 'reinforcers' because the stimuli are delivered ___________ of behaviour and therefore cannot be verified as reinforcers by their effect on behaviour in this context.",
    acceptable: ["independent", "regardless", "irrespective"],
    feedback: "A reinforcer is defined by its effect on behaviour — it must increase response frequency. Because NCR stimuli are delivered regardless of behaviour, we cannot confirm they are functioning as reinforcers in the NCR context. Hence 'stimuli with known reinforcing properties' or 'putative reinforcers'"
  },

  "a12": {
    stem: "NCR may effectively decrease problem behaviour because the reinforcers that maintain the problem behaviour are now available freely and frequently. This functions as an ___________ operation that reduces motivation to engage in problem behaviour.",
    acceptable: ["abolishing"],
    feedback: "NCR functions as an AO — by providing the reinforcer freely on a time-based schedule, it reduces the current value of that reinforcer and therefore the motivation to engage in problem behaviour to obtain it."
  },

  "a13": {
    stem: "In general, in the literature, NCR is implemented with positive reinforcement, ___________ reinforcement, or automatic reinforcement, depending on what maintains the problem behaviour.",
    acceptable: ["negative"],
    feedback: "NCR must match the function of the problem behaviour. If problem behaviour is escape-maintained, NCR delivers brief escape periods on a time-based schedule. If attention-maintained, NCR delivers attention. Matching function is essential."
  },

  "a14": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner implements NCR by attending to the learner every 2 minutes whose problem behaviour is maintained by access to tangibles. Is this consistent with NCR implementation guidelines? Answer yes or no.",
    acceptable: ["no"],
    feedback: "No — the NCR stimulus (attention) does not match the maintaining reinforcer (tangibles). NCR is only likely to function as an AO if the stimulus delivered matches what maintains the problem behaviour. Functional assessment must guide stimulus selection."
  },

  "a15": {
    stem: "To determine the initial NCR schedule, the practitioner divides the total ___________ of all baseline sessions by the total number of occurrences of the problem behaviour during baseline.",
    acceptable: ["duration", "time", "session length"],
    feedback: "This calculation gives the mean interresponse time (IRT) during baseline. The initial NCR interval is set at or slightly below this value to ensure the learner frequently contacts the reinforcer when the intervention begins."
  },

  "a16": {
    stem: "The initial NCR interval should be set at or slightly ___________ the mean baseline IRT to ensure frequent contact with the reinforcer at the start of the intervention.",
    acceptable: ["below", "less than", "shorter than", "lower than", "lower"],
    feedback: "Starting below the mean IRT means the reinforcer is delivered more frequently than the problem behaviour occurred during baseline — ensuring the learner contacts reinforcement early and often, maximising the abolishing effect."
  },

  "a17": {
    stem: "After the initial NCR interval produces a reduction in problem behaviour, the practitioner should gradually ___________ the interval.",
    acceptable: ["increase", "thin", "extend", "lengthen"],
    feedback: "NCR schedule thinning increases the interval length gradually. As with DRO, thinning must be systematic and data-driven — rapid increases risk a return to baseline rates of problem behaviour."
  },

  "a18": {
    stem: "Three procedures for thinning NCR intervals are: (a) increase by a ___________ amount each time; (b) increase proportionately; or (c) base each new interval on the learner's performance in recent sessions.",
    acceptable: ["constant", "fixed", "standard"],
    feedback: "These mirror the same thinning procedures used for DRO intervals. All three share the principle of progressive, data-driven change."
  },

  "a19": {
    stem: "One advantage of NCR is that, because the reinforcer is available frequently, ___________ bursts are less likely than in procedures that involve witholding access to a previously response-produced reinforcer.",
    acceptable: ["extinction", "extinction-induced"],
    feedback: "NCR reduces the likelihood of extinction bursts because the reinforcer is still available — just not contingent. It is the contrast between  a reinforcer-rich period and the removal of reinforcement that produces extinction bursting."
  },

  "a20": {
    stem: "A key limitation of NCR is that reinforcer presentation may coincidentally follow the target behaviour and thereby ___________ its occurrence.",
    acceptable: ["reinforce", "strengthen", "accidentally reinforce", "increase"],
    feedback: "Accidental reinforcement is a genuine risk with NCR. If the time-based reinforcer delivery happens to follow an instance of problem behaviour, that behaviour may be inadvertently strengthened."
  },

  "a21": {
    stem: "A second limitation of NCR is that it does not establish a ___________ behaviour in the learner's repertoire.",
    acceptable: ["replacement", "alternative", "communicative"],
    feedback: "NCR reduces problem behaviour but does not teach any specific appropriate behaviour. Augmenting NCR with DRA or FCT is recommended to develop a meaningful replacement behaviour."
  },

  "a22": {
    label: "REVIEW",
    stem: "State the mechanism by which NCR reduces problem behaviour.",
    acceptable: ["abolishing operation", "ao", "reduces motivation", "reduces value"],
    feedback: "NCR functions as an AO — freely delivering the maintaining reinforcer reduces its current value, thereby reducing the motivation to engage in problem behaviour to obtain it."
  },

  "a23": {
    stem: "One advantge of NCR with extinction, is that ___________ is less likely than NCR without extinction, in later post intervention periods of extinction   .",
    acceptable: ["resurgence" ],
    feedback: "Recent work has shown that resurgence is less likely when NCR is combined with extinction than when NCR is used alone. This is thought to reflect the importance of directly extinguishing the target operant: NCR alone abolishes the motivation for problem behaviour via MO effects but does not eliminate the response–reinforcer contingency"
  },
  
  "a24": {
    stem: "When using NCR without extinction, challenging behaviour that occurs during the interval ___________ be reinforced",
    acceptable: ["will", "is", "may", "can", "could"],
    feedback: "During NCR without extinction, there is no mechanism to withhold reinforcement contingent on behaviour — the reinforcer is delivered on a time-based schedule AND at other times when the behaviour also occurs"
  },

  "a25": {
    stem: "When using NCR with extinction, challenging behaviour that occurs during the interval ___________ be reinforced",
    acceptable: ["is not", "is never", "cannot be", "will not be", "not", "will not"],
    feedback: "Here CB is not reinforced. Extinction breaks the response–reinforcer contingency and is thought to be one reason NCR+EXT produces lower rates of resurgence than NCR alone. This may have the downside of generating extinction-induced effects however"
  },

  "a26": {
    stem: "A teacher is using NCR with a fixed-time 30-minute schedule to reduce students asking to check cell-phones during class. At the 15 minute mark, a student asks to check their phone. Under NCR with extinction, the practitioner ___________ deliver the reinforcer.",
    acceptable: ["should not", "does not", "will not", "cannot"],
    feedback: "Reinforcement is scheduled at 30 minutes, the extinction component requires that the target behaviour is not followed by reinforcement at any other time. This is the critical procedural difference from NCR without EXT, where the reinforcer would be delivered at moments other than the NCR period."
  },

  // ── SECTION 3: High-Probability Instructional Sequence ───────────────────

  "a27": {
    section: "Section 3: High-Probability Instructional Sequence",
    stem: "The high-probability instructional sequence involves presenting several instructions for which the learner has a history of ___________ before presenting a target instruction with a low probability of responding.",
    acceptable: ["compliance", "complying", "following", "responding", "cooperation"],
    feedback: "The high-p sequence begins with instructions the learner reliably follows (high-p instructions) before presenting the target instruction (low-p) that the learner typically resists or avoids."
  },

  "a28": {
    stem: "The reductive effects of the high-p sequence on cooperation resemble the abative effects of an ___________ operation that reduces the current potency of reinforcement for noncompliance.",
    acceptable: ["abolishing", "ao"],
    feedback: "The high-p sequence is thought to function as an AO — specifically, it reduces the reinforcing value of escape from the low-p request, making noncompliance less likely."
  },

  "a29": {
    stem: "The persistence of behaviour in the face of changing contingencies — an analogy to physical momentum — is sometimes used to describe the effects of the high-p sequence. This concept is called ___________ momentum.",
    acceptable: ["behavioural", "behavioral"],
    feedback: "Behavioural momentum describes the tendency for behaviour to persist in the face of disruption, analogous to the physical concept of momentum. A history of reinforced responding increases resistance to change."
  },

  "a30": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner presents a high-p sequence but does not reinforce responding following each with the high-p instructions. Is this consistent with the high-p procedure? Answer yes or no.",
    acceptable: ["no"],
    feedback: "No — reinforcing each high-p response is an essential component of the procedure. Without reinforcement, there is no history of reinforced compliance to build the momentum that carries over to the low-p instruction."
  },

  "a31": {
    label: "REVIEW",
    stem: "The high-p sequence is thought to work by building behavioural ___________, making compliance with the low-p instruction more resistant to change.",
    acceptable: ["momentum"],
    feedback: "Behavioural momentum theory predicts that a history of reinforcement in a given context increases resistance to disruption. By establishing a run of reinforced compliance with high-p instructions, the sequence creates momentum that carries over to the low-p instruction, making refusal less likely."
},

  // ── SECTION 4: Functional Communication Training (FCT) ───────────────────

  "a32": {
    section: "Section 4: Functional Communication Training (FCT)",
    stem: "FCT establishes an appropriate ___________ behaviour to compete with problem behaviours evoked by a motivating operation.",
    acceptable: ["communicative", "communication", "request"],
    feedback: "FCT teaches a communicative response in order to access the reinforcer that was previously obtained through problem behaviour. The communicative response competes with the problem behaviour by producing the same reinforcer."
  },

  "a33": {
    stem: "FCT uses DRA to teach an adaptive communicative response that produces the ___________ reinforcer that has maintained the problem behaviour.",
    acceptable: ["same", "identical", "equivalent"],
    feedback: "The communicative response must produce the same reinforcer as the problem behaviour — not just any reinforcer. This functional equivalence is what makes the communicative response a genuine competitor to the problem behaviour."
  },

  "a34": {
    stem: "Because the FCT communicative response produces the same reinforcer as the problem behaviour, it is described as ___________ equivalent to the problem behaviour.",
    acceptable: ["functionally", "functional"],
    feedback: "Functional equivalence — the communicative response and the problem behaviour access the same reinforcer. This is the core mechanism of FCT: replacing a problematic way of accessing reinforcement with an appropriate one."
  },

  "a35": {
    stem: "FCT develops communicative behaviours that are sensitive to current ___________ operations, meaning the communicative response is more likely when the learner is motivated to access the reinforcer.",
    acceptable: ["motivating", "establishing", "mo"],
    feedback: "Because FCT responses are maintained by the same reinforcer as the problem behaviour, they are sensitive to the same MOs. When the MO increases the value of the reinforcer, both the problem behaviour and the FCT response are evoked."
  },

  "a36": {
    stem: "FCT is therefore classified as a ___________ antecedent intervention because it requires knowledge of the function of the problem behaviour to select the appropriate reinforcer for the communicative response.",
    acceptable: ["function-based", "function based"],
    feedback: "FCT is a function-based intervention — functional assessment must identify the maintaining reinforcer so the communicative response can be taught to access that same reinforcer."
  },

  "a37": {
    stem: "FCT with ____________ also requires that the reinforcement for problem behaviour be witheld while the communicative responses are reinforced, to establish the communicative response as the preferred way to access reinforcement.",
    acceptable: ["extinction"],
    feedback: "Without extinction of the problem behaviour, the learner can access the reinforcer through either the communicative response or the problem behaviour. Extinction creates the differential contingency that favours the communicative response. NCR with extinction represents the original version of FCT. There has also been some work on FCT without extinction"
  },

  "a38": {
    stem: "When selecting the topography of the FCT response, practitioners should consider which form of communication the learner can most easily acquire and which will be most readily understood in the learner's ___________ environment.",
    acceptable: ["natural", "everyday"],
    feedback: "The FCT response must be useful in the learner's natural environment. A response that caregivers cannot recognise or respond to will not be maintained after the programmed intervention ends."
  },

  "a39": {
    stem: "FCT should initially be implemented in a setting with minimal ___________ sources of reinforcement. This will maximise the EO for the target reinforcer and increase the frequency of the communicative response.",
    acceptable: ["competing", "alternative"],
    feedback: "Minimising competing reinforcement at the outset ensures the learner is motivated to emit the communicative response. As the response is established, generalisation across settings with more competing reinforcement is programmed."
  },

  "a40": {
    stem: "When first teaching the FCT response, the reinforcer should be delivered on a ___________ schedule to firmly establish the communicative response in the learner's repertoire.",
    acceptable: ["continuous", "crf", "continuous reinforcement"],
    feedback: "CRF for the communicative response at the outset — consistent with DRA guidelines. Every emission of the communicative response must produce the reinforcer initially to establish it as a strong competitor to the problem behaviour."
  },

  "a41": {
    stem: "After the communicative response is firmly established, the practitioner may introduce ___________ thinning to better approximate natural contingencies.",
    acceptable: ["reinforcement", "schedule"],
    feedback: "Reinforcement thinning is essential for generalisation and maintenance. Without thinning, the learner requires constant programmed reinforcement — which is not feasible in most natural settings."
  },

  "a42": {
    stem: "One approach to reinforcement thinning in FCT is to introduce a ___________ between the communicative response and reinforcer delivery, gradually increases as the behaviour is maintained.",
    acceptable: ["delay", "time delay"],
    feedback: "Time delay thinning — the learner must wait progressively longer after the communicative response before accessing the reinforcer. This is one of two main thinning approaches, alongside chained task requirements."
  },

  "a43": {
    stem: "Practioners will sometimes use a salient SD to signal when the communicative response will produce the reinforcer, and an S-delta to signal when it will not. This ___________ control approach can enhance the effectiveness of the procedure",
    acceptable: ["stimulus", "discriminative stimulus", "contextual"],
    feedback: "Stimulus control thinning (e.g., Hanley et al., 2001) uses a clear signal to indicate reinforcement availability. The learner learns to emit the communicative response in the presence of the SD and tolerate non-reinforcement in its absence."
  },

  "a44": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner teaches FCT but does not place the problem behaviour on extinction — instead, both the communicative response and the problem behaviour produce the reinforcer. What type of FCT is this?",
    acceptable: ["without extinction", "FCT without extinction", "without ext"],
    feedback: "FCT without extinction of the problem behaviour will mean that there is no clear differential contingency favouring the communicative response. The learner may continue emitting the problem behaviour because it also accesses the reinforcer, possibly with less effort."
  },

  "a45": {
    stem: "A key advantage of FCT over NCR is that FCT teaches a ___________ behaviour — an appropriate communicative response that can be maintained by natural contingencies in the learner's environment.",
    acceptable: ["replacement", "alternative", "communicative"],
    feedback: "FCT builds a new skill. Unlike NCR, which only reduces problem behaviour without teaching anything new, FCT produces a communicative response that can recruit natural reinforcement and maintain treatment gains. Moreover, during NCR the teacher rather than the learner is in control of reinforcer access"
  },

  "a46": {
    stem: "A limitation of FCT is that the communicative response may be emitted at ___________ rates , particularly if reinforcement thinning has not been implemented.",
    acceptable: ["high", "frequent"],
    feedback: "If the communicative response is on CRF indefinitely, the learner may emit it very frequently which can be impractical. Reinforcement thinning and stimulus control procedures can help to address this."
  },

  "a47": {
    label: "REVIEW",
    stem: "The first component of FCT is delivery of a ___________ equivalent reinforcer contingent on an appropriate communicative response.",
    acceptable: ["functionally", "functional"],
    feedback: "Functional equivalence — the communicative response must produce the same reinforcer as the problem behaviour. This is what makes the communicative response a genuine competitor."
  },
  
  "a48": {
    stem: "A key decision when implementing FCT is whether to take advantage of naturally occurring opportunities or to ___________ establishing operations",
    acceptable: ["contriving", "arranging", "contrive", "arrange"],
    feedback: "Naturally occurring EOs are those that arise in the learner's environment without deliberate manipulation. Contrived EOs involve the practitioner deliberately arranging conditions to evoke the motivating operation. Contrived EOs allow for more frequent and controlled practice opportunities but require careful planning to ensure the functional communication response contacts reinforcement reliably and that motivation is sufficiently high at the point of teaching." 
  },

  "a49": {
    stem: "Before selecting a communicative response for FCT, the practitioner should assess the learner's current ___________ and ensure the response is consistent with their preferences.",
    acceptable: ["repertoire", "repertoires", "skills", "abilities"],
    feedback: "The communicative response selected for FCT should ideally be within the learner's existing repertoire or achievable with minimal prompt support — a response that is too complex will not be acquired quickly enough to compete with the challenging behaviour. Preference also matters: if the learner shows no inclination toward a particular mode of communication, acquisition and generalisation are likely to be slower. Both factors should be assessed prior to implementation, drawing on information from caregivers, direct observation, and any existing communication assessments."
},

  "a49b": {
    label: "REVIEW",
    stem: "An important component of FCT is ___________ the reinforcer when the problem behaviour occurs.",
    acceptable: ["withholding", "withdrawing", "extinction"],
    feedback: "Extinction of the problem behaviour — the reinforcer is withheld contingent on problem behaviour. Without this component, both the communicative response and the problem behaviour produce the reinforcer, so there is no differential contingency favouring the communicative response."
  },

  // ── SECTION 5: Default Interventions ──────────────────────────────────────

  "a50": {
    section: "Section 5: Default Antecedent Interventions",
    stem: "Default antecedent interventions decrease problem behaviour regardless of its operant ___________, meaning a specific functional behaviour assessment is not required before implementation.",
    acceptable: ["function", "functions"],
    feedback: "Default interventions work across functions — they do not depend on identifying whether behaviour is maintained by attention, escape, tangibles, or automatic reinforcement. This makes them more broadly applicable but potentially less precisely targeted. Two examples are Enriched Environment and Antecedent Exercise"
  },


  "a51": {
    stem: "An enriched environment intervention provides non-contingent access to preferred sources of reinforcement such as games or social activities. This is particularly effective for problem behaviour maintained by ___________ reinforcement.",
    acceptable: ["automatic"],
    feedback: "Enriched environments are especially useful when problem behaviour is automatically reinforced — i.e., maintained by the stimulation the behaviour itself produces. The enriched environment provides competing sources of stimulation."
  },

  "a52": {
    stem: "The enriched environment intervention works by arranging ___________ between the stimulation provided by the intervention and the stimulation produced by the problem behaviour.",
    acceptable: ["competition", "competing"],
    feedback: "The enriched environment creates competing sources of reinforcement. If the environment provides rich stimulation, the relative value of the stimulation produced by the problem behaviour is reduced."
  },

  "a53": {
    label: "DISCRIMINATION FRAME",
    stem: "A practitioner implements an enriched environment intervention for a learner whose problem behaviour is maintained by escape from demands. Is this likely to be the most effective approach? Answer yes or no.",
    acceptable: ["no"],
    feedback: "No — enriched environments are most effective for automatically reinforced behaviour, where the environment competes with the stimulation produced by the problem behaviour. For escape-maintained behaviour, a function-based intervention such as NCR with escape or FCT would be more directly aligned with the maintaining contingency."
  },


  // ── SECTION 6: The IISCA ─────────────────────────────────────────────────

  "a55": {
    section: "Section 6: The Interview-Informed Synthesised Contingency Analysis (IISCA)",
    stem: "Traditional functional analyses (Iwata et al., 1982) test individual variables in isolation. The IISCA, developed by Hanley and colleagues, differs by testing a ___________ of variables identified through interview as most likely to evoke problem behaviour.",
    acceptable: ["synthesis", "combination", "synthesised"],
    feedback: "The IISCA tests a synthesised contingency — a combination of the motivating operations, antecedents, and consequences identified through open-ended interview as the most contextually relevant triggers for problem behaviour. This reflects real-world complexity better than single-variable analyses."
  },

  "a56": {
    stem: "The IISCA begins with an open-ended ___________ with caregivers and others who know the individual well, to identify the specific antecedents and consequences most associated with problem behaviour.",
    acceptable: ["nterview"],
    feedback: "The open-ended interview is the first step. Rather than using a structured rating scale, the IISCA uses an open-ended format to elicit rich, contextually specific information about the conditions that evoke and maintain problem behaviour."
  },

  "a57": {
    stem: "The interview identifies a ___________ — a specific combination of antecedent conditions and consequences — that will be tested in the subsequent observation and analysis phases.",
    acceptable: ["synthesised contingency", "synthesized contingency", "test condition", "hypothesis"],
    feedback: "The synthesised contingency reflects the interviewee's description of the real-world conditions under which problem behaviour occurs. It is then translated into a structured test condition for the functional analysis."
  },

  "a58": {
    stem: "Unlike traditional ABC observation, the IISCA derives hypotheses about the maintaining contingency directly from an ___________ with caregivers and the learner.",
    acceptable: ["interview", "structured interview", "open-ended interview"],
    feedback: "Traditional ABC observation involves watching behaviour in the natural environment and recording antecedents and consequences as they occur, with hypotheses derived from patterns in the data. The IISCA bypasses this step — instead, a structured open-ended interview with caregivers and the learner is used to identify the specific antecedents, consequences, and setting events that occasion problem behaviour."
  },

  "a59": {
    stem: "In the IISCA test phase, the synthesised test condition (which evokes problem behaviour) is alternated with a ___________ condition in which the learner has free access to preferred items and no demands are placed.",
    acceptable: ["control", "reinforcement", "free access"],
    feedback: "The control condition provides free access to reinforcement with no demands — a condition under which problem behaviour should not occur if the synthesised contingency is indeed responsible. Alternating test and control allows functional control to be demonstrated."
  },

  "a60": {
    stem: "Advocates of the IISCA suggest it is considered more ___________ valid than traditional single-variable functional analyses because the test conditions more closely resemble the real-world circumstances in which problem behaviour occurs.",
    acceptable: ["ecologically", "socially", "contextually"],
    feedback: "Ecological validity — the IISCA tests conditions that match the learner's actual environment rather than artificially isolated variables. Caregivers and practitioners often find the IISCA conditions more recognisable and believable."
  },

  "a61": {
    stem: "A key advantage of the IISCA over traditional functional analyses is that it is typically completed more ___________, making it more practical for use in applied settings.",
    acceptable: ["quickly", "rapidly", "efficiently", "briefly"],
    feedback: "The IISCA typically takes fewer sessions to complete than a full multi-condition functional analysis. The synthesised test condition can often demonstrate functional control within a small number of alternations."
  },
  
  "a62": {
    label: "DISCRIMINATION FRAME",
    stem: "A traditional functional analysis tests attention, escape, tangibles, and alone conditions in separate phases. The IISCA tests a condition combining the specific antecedents and consequences identified through interview. Which approach tests variables in isolation?",
    acceptable: ["traditional", "iwata", "standard functional analysis", "fa"],
    feedback: "The traditional functional analysis (Iwata et al., 1982) tests each variable in isolation. The IISCA tests a synthesised combination of variables — reflecting the view that problem behaviour in the real world is typically evoked by multiple concurrent variables, not single isolated conditions."
  },

  "a63": {
  stem: "A criticism of the IISCA is that by testing a ___________ contingency rather than isolating individual variables, it may be difficult to identify which specific reinforcer is maintaining the problem behaviour.",
  acceptable: ["synthesised", "synthesized", "multiple"],
  feedback: "Because the IISCA bundles multiple antecedents and consequences into a single test condition, it can produce a clear differentiated outcome without revealing which component is actually responsible for maintaining the behaviour. Critics argue this limits the precision of treatment design, particularly when not all components of the synthesised contingency can be practically replicated in intervention."
},

  // ── SECTION 7: Skills-Based Treatment (SBT) ───────────────────────────────

  "a64": {
    section: "Section 7: Skills-Based Treatment (SBT)",
    stem: "Skills-based treatment (SBT), developed by Hanley and colleagues, follows the IISCA and uses the results to develop a comprehensive treatment that goes beyond simple ___________ of the problem behaviour.",
    acceptable: ["reduction", "suppression", "elimination"],
    feedback: "SBT aims to build a comprehensive skill set, not merely suppression of problem behaviour. The goal is to teach the learner skills that enable them to function effectively in the contexts that previously evoked problem behaviour."
  },

  "a65": {
    stem: "SBT is built on the results of the ___________, which identifies the specific synthesised contingency maintaining problem behaviour and informs the design of the treatment.",
    acceptable: ["iisca", "interview-informed synthesised contingency analysis", "functional analysis"],
    feedback: "The IISCA directly informs SBT. The synthesised contingency identified in the IISCA is used to design the treatment context — ensuring that treatment targets the exact conditions that evoke and maintain problem behaviour."
  },

  "a66": {
    stem: "SBT teaches three core skill sets: (a) ___________ skills — in the form of delays, denials, and transitions; (b) manding skills — making appropriate requests; and (c) contextual control skills — discriminating when each skill is appropriate.",
    acceptable: ["toleration", "tolerance"],
    feedback: "Toleration skills, manding skills, and contextual control skills are the three pillars of SBT. Together they equip the learner to handle the conditions that previously evoked problem behaviour without resorting to problem behaviour."
  },

  "a67": {
    stem: "The first skill taught in SBT is a functional communicative response termed an ___________ mand — a single response that can access a range of different reinforcers.",
    acceptable: ["omnibus"],
    feedback: "The omnibus mand is a generalised request — typically something like 'I need help' or 'I need a break' — that produces access to whichever reinforcer is currently relevant. Rather than teaching separate mands for each potential reinforcer identified in the functional assessment, the omnibus mand provides a single efficient response that competes with problem behaviour across a range of motivating operations."
  },

  "a68": {
    stem: "Toleration skills are initially taught by presenting very brief, easily manageable delays or denials and reinforcing the learner's calm behaviour, then ___________ increasing the duration or difficulty.",
    acceptable: ["gradually", "systematically"],
    feedback: "Gradual shaping of toleration — beginning with very brief delays or small denials and systematically increasing them as the learner's calm behaviour is reinforced. This mirrors the shaping logic of DRL schedule thinning."
  },

  "a71": {
    stem: "The third skill set — ___________ control — teaches the learner to discriminate between contexts in which manding will be reinforced and contexts in which they must tolerate delay or denial.",
    acceptable: ["contextual", "stimulus", "discriminative"],
    feedback: "Contextual control skills — the learner learns that reinforcement for manding is not always available, and that tolerating delays or denials is sometimes required. Clear SD/S-delta signals are used to make this discrimination learnable."
  },

  "a72": {
     stem: "SBT is implemented initially in a ___________ context that closely resembles the conditions identified in the IISCA, before generalising treatment to natural settings.",
    acceptable: ["structured", "controlled", "clinical", "training"],
    feedback: "SBT begins in a structured training context that replicates the IISCA conditions. This ensures the learner can demonstrate the three skill sets under conditions that reliably evoke problem behaviour before generalisation is programmed."
  },

  "a73": {
    stem: "Once the learner reliably demonstrates toleration, manding, and contextual control skills in the structured context, the programme is ___________ to natural settings and less trained communication partners.",
    acceptable: ["generalised", "generalized", "extended", "expanded"],
    feedback: "Generalisation is a planned component of SBT, not an afterthought. Caregivers are trained, settings are varied, and the stimulus conditions are systematically broadened to ensure skills are maintained across the learner's natural environment."
  },

  "a74": {
    stem: "Advocates of the SBT process argue that an advantage of SBT over simple FCT is that SBT directly addresses ___________ to reinforcement, denials, and transitions — conditions that often trigger relapse in FCT programmes when reinforcement thinning is introduced.",
    acceptable: ["toleration", "tolerance", "delays", "delay"],
    feedback: "FCT programmes often encounter difficulties when reinforcement thinning is introduced — the learner may return to problem behaviour when the mand does not immediately produce the reinforcer. SBT's explicit toleration training addresses this directly."
  },

  // ── SECTION 8: Comparing and Selecting Antecedent Interventions ───────────

  "a75": {
    section: "Section 8: Comparing and Selecting Antecedent Interventions",
    stem: "NCR, FCT, high-p, and SBT are all ___________ antecedent interventions because they are derived from assessment and target specific maintaining contingencies.",
    acceptable: ["function-based", "function based"],
    feedback: "All four are function-based — they require knowledge of what evokes and maintains the problem behaviour. Antecedent exercise and enriched environments, by contrast, are default interventions."
  },

  "a76": {
    stem: "NCR is the most appropriate initial choice when the problem behaviour is severe and the learner has very limited ___________ skills that could serve as an alternative communicative response.",
    acceptable: ["communicative", "communication", "language"],
    feedback: "NCR does not require the learner to emit any specific response — reinforcement is delivered on a time-based schedule. This makes it suitable when teaching a communicative alternative is not yet feasible.It also guarantees that putative reinforcers are delivered at a maximial rate (e.g., according to a pre-determined arrangement)"
  },

  "a77": {
    stem: "FCT is preferred over NCR in the longer term because FCT produces a ___________ behaviour that can be maintained by natural contingencies, whereas NCR does not.",
    acceptable: ["replacement", "alternative", "communicative"],
    feedback: "FCT builds a skill. NCR merely reduces problem behaviour by making the reinforcer freely available — it does not equip the learner with an appropriate way to access reinforcement independently."
  },

  "a78": {
    stem: "SBT extends FCT by also teaching ___________ skills and contextual control — addressing the conditions that cause relapse when FCT reinforcement is thinned.",
    acceptable: ["toleration", "tolerance"],
    feedback: "SBT adds toleration and contextual control to the functional communication component of FCT. This makes SBT more comprehensive than FCT alone, particularly for learners with a history of relapse during reinforcement thinning."
  },

  "a79": {
    stem: "The high-p instructional sequence is most appropriate when the primary problem is ___________ with low-probability requests, rather than a broader pattern of problem behaviour across contexts.",
    acceptable: ["noncompliance", "non-compliance", "compliance", "avoidance", "refusal", "non-cooperation"],
    feedback: "The high-p sequence is specifically designed for noncompliance. Its mechanism — building behavioural momentum around cooperation — is most directly applicable when the problem is refusal of specific instructions."
  },

  // ── SECTION 9: Integration Frames ────────────────────────────────────────


  "a80": {
    stem: "An NCR programme in successfully reduces challenging behaviour. The team now wants to build a communicative response. The next step is to implement ___________ to teach the learner to request attention appropriately.",
    acceptable: ["fct", "functional communication training", "SBT"],
    feedback: "FCT — teaching an appropriate communicative response (e.g., tapping a shoulder, vocalising) that produces the same social attention reinforcer. FCT produces a replacement behaviour that NCR alone cannot."
  },

  "a81": {
    stem: "During FCT reinforcement thinning, challenging behaviour re-emerges when the learner's communicative request is not immediately honoured. The team decides to implement SBT to directly teach resilience to ___________ to reinforcement.",
    acceptable: ["delays", "denial"],
    feedback: "Toleration training — teaching the learner to wait calmly after the communicative request before reinforcement is delivered (e.g., to be more resilient to coping with delay). This is exactly the condition SBT addresses that simple FCT does not."
  },

  "a82": {
    stem: "A teacher wants to increase willingness to do academic work in a student who frequently refuses. The teacher presents three easy requests the student reliably completes ('show me your pencil', 'point to your book', 'write your name') and reinforces each, then immediately presents the academic task. This is an example of the ___________ instructional sequence.",
    acceptable: ["high-p", "high probability", "high-probability"],
    feedback: "High-p sequence — three high-probability compliance requests are reinforced in sequence, then the low-probability academic task is presented immediately. The reinforced compliance history creates behavioural momentum that carries over to the task."
  },

  "a83": {
    stem: "A functional analysis reveals that a learner's problem behaviour is maintained by automatic reinforcement. The team implements an enriched environment with a variety of preferred activities. The enriched environment works by creating ___________ between the preferred items and the stimulation produced by the problem behaviour.",
    acceptable: ["competition", "competing"],
    feedback: "The enriched environment provides competing sources of stimulation. For automatically reinforced behaviour, this competition can reduce the relative value of the stimulation produced by the problem behaviour, decreasing its frequency."
  },

  "a84": {
    label: "INTEGRATION FRAME",
    stem: "An IISCA reveals that a learner's problem behaviour is evoked by requests and maintained by escape. The first SBT skill set to teach is ___________ skills",
    acceptable: ["manding", "mand"],
    feedback: "Manding — the learner is taught an appropriate communicative response (e.g., 'break please') that produces escape from demands. This is the FCT component of SBT."
  },

};
