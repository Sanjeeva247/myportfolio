
import React from 'react';
import {
  GitBranch,
  FileSearch,
  BrainCircuit,
  Database,
  Cloud,
  Code2,
  ShieldCheck,
  Workflow,
  Search,
  Activity,
  FlaskConical,
  Layers3,
  ChartNoAxesCombined,
  ChartNoAxesColumnIncreasing,
  FileText,
  Microscope,
  ClipboardCheck,
  Network,
  Cpu,
  Server,
  BarChart3,
  MessageSquareText,
  HeartPulse,
  Clock3,
  GitPullRequest,
  CheckCircle2,
  ArrowRight,
  Boxes,
} from 'lucide-react';

import './Projects.css';

const TAG_ICONS = {
  'Agentic AI': Workflow,
  'LangGraph': GitBranch,
  'LangChain': Network,
  'Azure OpenAI': BrainCircuit,
  'Quality AI': ShieldCheck,
  'FastAPI': Code2,
  'Generative AI': BrainCircuit,
  'RAG': Layers3,
  'Vector Search': Database,
  'Document AI': FileSearch,
  'NLP': MessageSquareText,
  'Machine Learning': Cpu,
  'TF-IDF': Search,
  'Random Forest': GitBranch,
  'Logistic Regression': ChartNoAxesCombined,
  'Power BI': BarChart3,
  'XGBoost': Activity,
  'Regression': ChartNoAxesColumnIncreasing,
  'Feature Engineering': FlaskConical,
  'MLOps': Cloud,
  'Azure': Cloud,
  'SQL': Database,
  'Docker': Boxes,
  'Python': Code2,
  'AWS': Cloud,
};

const PROJECTS = [
  {
    number: '01',
    title: 'Agentic Pharmaceutical Deviation Investigation Assistant',
    client: 'Shilpa Medicare Limited',
    domain: 'PHARMACEUTICAL QUALITY AI',

    desc:
      'AI-powered assistant that assembles manufacturing deviation evidence, retrieves applicable SOPs and historical records, and drafts investigation follow-up tasks for quality analyst approval.',

    tags: [
      'Agentic AI',
      'LangGraph',
      'LangChain',
      'Azure OpenAI',
      'FastAPI',
      'SQL',
      'Docker',
    ],

    accent: '#38BDF8',
    icon: Microscope,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80',

    architecture: [
      'Deviation Intake',
      'Evidence Retrieval',
      'Comparison',
      'Draft Task',
      'Validation',
      'Approval',
      'Response',
    ],

    contributions: [
      'Designed LangGraph nodes for intake, evidence retrieval, comparison, drafting, validation and approval.',
      'Integrated tools for deviation lookup, SOP retrieval, historical-case search and CAPA status.',
      'Implemented site-based authorization, parameterized queries and scoped checkpoints.',
      'Validated citations, batch identifiers and separation of facts from hypotheses.',
      'Built a React and TypeScript interface for evidence tracking and reviewer approval.',
      'Added regression testing, versioned tool schemas and operational monitoring.',
    ],

    technologies: [
      'Python',
      'LangGraph',
      'LangChain',
      'Azure OpenAI GPT-4o',
      'SQL',
      'FastAPI',
      'Docker',
      'React',
      'TypeScript',
      'Azure CI/CD',
    ],
  },

  {
    number: '02',
    title: 'Pharmaceutical SOP and Quality Knowledge Assistant',
    client: 'Shilpa Medicare Limited',
    domain: 'ENTERPRISE RAG · QUALITY KNOWLEDGE',

    desc:
      'Enterprise RAG assistant that finds approved pharmaceutical SOPs and work instructions using site, product, procedure and effective date, returning section-level evidence and citations.',

    tags: [
      'Generative AI',
      'RAG',
      'Vector Search',
      'Azure OpenAI',
      'Document AI',
    ],

    accent: '#22D3EE',
    icon: FileSearch,
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80',

    architecture: [
      'Document Ingestion',
      'Section Parsing',
      'Embeddings',
      'Hybrid Retrieval',
      'Metadata Filtering',
      'Reranking',
      'Cited Answer',
    ],

    contributions: [
      'Ingested authorized SOPs, work instructions and quality manuals with revision and approval metadata.',
      'Preserved procedure steps, warnings, table headers and traceable document references.',
      'Combined keyword and vector retrieval with site, permission and effective-date filters.',
      'Generated answers with document revision and section citations.',
      'Handled missing context, conflicting versions and unavailable documents.',
      'Evaluated source recall, version accuracy, faithfulness and abstention.',
    ],

    technologies: [
      'Python',
      'LangChain',
      'Azure OpenAI GPT-4o',
      'Azure Cosmos DB Vector Search',
      'Azure Blob Storage',
      'FastAPI',
    ],
  },

  {
    number: '03',
    title: 'Loan Servicing Intent and Sentiment Analytics',
    client: 'Bajaj Finance Limited',
    domain: 'NLP · FINANCIAL SERVICES',

    desc:
      'NLP and machine learning solution that classifies loan-servicing messages, supports customer request routing, and analyses dissatisfaction across EMI issues, payments, foreclosure statements and account access.',

    tags: [
      'NLP',
      'Machine Learning',
      'TF-IDF',
      'Logistic Regression',
      'Random Forest',
      'Power BI',
    ],

    accent: '#A78BFA',
    icon: ChartNoAxesCombined,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',

    architecture: [
      'Message Ingestion',
      'Data Redaction',
      'Annotation',
      'TF-IDF Features',
      'Classification',
      'Confidence Review',
      'Analytics',
    ],

    contributions: [
      'Prepared authorized service messages, emails and survey comments with sensitive-data redaction.',
      'Defined separate labels for loan-servicing intent and customer sentiment.',
      'Built word and character TF-IDF features while preserving negation and loan terminology.',
      'Compared Logistic Regression and Random Forest using chronological data splits and class weighting.',
      'Evaluated per-intent recall, macro-F1, confusion matrices and confidence for manual routing.',
      'Deployed inference through FastAPI on AWS EC2 and stored datasets and model artifacts in S3.',
      'Built Power BI analytics and monitored routing quality using CloudWatch.',
    ],

    technologies: [
      'Python',
      'pandas',
      'scikit-learn',
      'TF-IDF',
      'Logistic Regression',
      'Random Forest',
      'FastAPI',
      'Power BI',
      'AWS S3',
      'EC2',
      'CloudWatch',
    ],
  },

  {
    number: '04',
    title: 'Reimbursement Claim Processing Time Prediction',
    client: 'Star Health and Allied Insurance Company Limited',
    domain: 'MACHINE LEARNING · HEALTH INSURANCE',

    desc:
      'Machine learning system that estimates remaining calendar days until a reimbursement claim receives a final decision, helping operations prioritize aging claims and document follow-ups.',

    tags: [
      'Machine Learning',
      'XGBoost',
      'Regression',
      'Feature Engineering',
      'MLOps',
    ],

    accent: '#F472B6',
    icon: Clock3,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',

    architecture: [
      'Claim Events',
      'Daily Snapshots',
      'Feature Engineering',
      'Temporal Split',
      'Regression',
      'Model Evaluation',
      'Daily Scoring',
    ],

    contributions: [
      'Defined the target as remaining calendar days until final approval or rejection.',
      'Built reproducible snapshots from claim intake, document receipts, queries and status history.',
      'Engineered claim age, stage age, missing-document count and pending-query features.',
      'Prevented leakage by grouping snapshots by claim and validating on later claims.',
      'Compared a stage-and-age baseline with gradient-boosted regression.',
      'Considered censoring-aware objectives for unresolved claims at the observation cutoff.',
      'Evaluated MAE, RMSE, bias and stage-level errors with coverage indicators.',
      'Prepared reproducible containers, CI checks and monitoring for delayed outcomes and stage drift.',
    ],

    technologies: [
      'Python',
      'SQL',
      'pandas',
      'scikit-learn',
      'XGBoost Regression',
      'FastAPI',
      'Docker',
      'Azure CI/CD',
    ],
  },
];

function getTagIcon(tag) {
  return TAG_ICONS[tag] || Code2;
}

function ProjectTag({ tag, accent }) {
  const Icon = getTagIcon(tag);

  return (
    <span
      className="project-tag"
      style={{ '--tag-accent': accent }}
      title={tag}
    >
      <Icon size={14} strokeWidth={1.8} />
      <span>{tag}</span>
    </span>
  );
}

function ArchitectureFlow({ steps, accent }) {
  return (
    <div
      className="architecture-flow"
      style={{ '--project-accent': accent }}
    >
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="architecture-node">
            {step}
          </div>

          {index < steps.length - 1 && (
            <ArrowRight
              className="architecture-arrow"
              size={14}
              strokeWidth={1.8}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  const ProjectIcon = project.icon;

  return (
    <article
      className="project-card"
      style={{ '--project-accent': project.accent }}
    >
      {/* LEFT: project illustration */}
      <div className="project-visual">
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} illustration`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
            event.currentTarget.parentElement.classList.add(
              'project-visual-fallback'
            );
          }}
        />

        <div className="visual-overlay" />

        <div className="visual-number">
          PROJECT / {project.number}
        </div>

        <div className="visual-bottom">
          <div className="visual-icon">
            <ProjectIcon size={28} strokeWidth={1.6} />
          </div>

          <div>
            <span className="visual-label">PROJECT DOMAIN</span>
            <p>{project.domain}</p>
          </div>
        </div>

        <div className="visual-orbit visual-orbit-one" />
        <div className="visual-orbit visual-orbit-two" />
      </div>

      {/* MIDDLE: title, client, description and tags */}
      <div className="project-main">
        <div className="project-heading">
          <div className="project-heading-icon">
            <ProjectIcon size={25} strokeWidth={1.7} />
          </div>

          <div>
            <span className="project-eyebrow">
              {project.domain}
            </span>

            <h3>{project.title}</h3>

            <span className="project-client">
              {project.client}
            </span>
          </div>
        </div>

        <p className="project-description">
          {project.desc}
        </p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <ProjectTag
              key={tag}
              tag={tag}
              accent={project.accent}
            />
          ))}
        </div>
      </div>

      {/* RIGHT: architecture and contributions */}
      <div className="project-details">
        <section className="architecture-section">
          <h4 className="detail-heading">
            <Network size={19} />
            System Flow / Architecture
          </h4>

          <ArchitectureFlow
            steps={project.architecture}
            accent={project.accent}
          />
        </section>

        <div className="project-detail-columns">
          <section className="contributions-section">
            <h4 className="detail-heading">
              <CheckCircle2 size={19} />
              Key Contributions
            </h4>

            <ul className="contribution-list">
              {project.contributions.map((contribution) => (
                <li key={contribution}>
                  <span className="contribution-dot" />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="technologies-section">
            <h4 className="detail-heading">
              <Layers3 size={19} />
              Technologies Used
            </h4>

            <ul className="technology-list">
              {project.technologies.map((technology) => {
                const TechIcon = getTagIcon(technology);

                return (
                  <li key={technology}>
                    <TechIcon
                      size={16}
                      strokeWidth={1.8}
                    />
                    <span>{technology}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <header className="projects-header">
          <div className="projects-header-copy">
            <span className="section-eyebrow">
              SELECTED WORK / 2023—PRESENT
            </span>

            <h2>
              Engineering <span>Intelligent Systems.</span>
            </h2>

            <p>
              Agentic AI, enterprise RAG, NLP and predictive
              machine learning applications across pharmaceutical
              quality, financial services and health insurance.
            </p>
          </div>

          <div className="projects-count">
            <span>PROJECTS</span>
            <strong>04</strong>
            <span>AI / ML SYSTEMS</span>
          </div>
        </header>

        <div className="projects-list">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
