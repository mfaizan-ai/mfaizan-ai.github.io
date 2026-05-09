// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "List of publications, including published and submitted papers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A selection of research and engineering projects spanning deep learning, medical imaging, and computer vision.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Summary of relevant experience and research",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-the-next-frontier-in-computer-vision-are-cnns-ready-to-take-the-lead",
        
          title: "The Next Frontier in Computer Vision: Are CNNs Ready to Take the Lead?...",
        
        description: "How can we empower CNNs to learn like transformers, overcome their inherent limitations, and leverage large-scale data and models with billions of parameters?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/cnn-frontier-computer-vision/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-am-delighted-to-share-that-i-have-completed-my-master-s-degree-in-robotics-and-intelligent-machine-engineering-at-the-national-university-of-sciences-and-technology-islamabad-pakistan",
          title: 'I am delighted to share that I have completed my Master’s degree in...',
          description: "",
          section: "News",},{id: "news-i-am-delighted-to-share-that-our-paper-rag-powered-llms-for-qa-evolution-challenges-applications-and-future-directions-received-the-best-paper-award-in-the-software-engineering-track-at-the-5th-international-conference-on-communication-technologies-comtech-held-at-the-military-college-of-signals-rawalpindi",
          title: 'I am delighted to share that our paper, “RAG-Powered LLMs for QA: Evolution,...',
          description: "",
          section: "News",},{id: "news-i-am-delighted-to-share-that-i-have-joined-the-cusack-lab-as-a-phd-student-where-i-will-be-working-on-research-at-the-intersection-of-neuroimaging-machine-learning-and-motion-correction",
          title: 'I am delighted to share that I have joined the Cusack Lab as...',
          description: "",
          section: "News",},{id: "projects-deep-learning-based-multimodal-brain-tumor-segmentation-in-mri",
          title: 'Deep Learning-Based Multimodal Brain Tumor Segmentation in MRI',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_brats_segmentation/";
            },},{id: "projects-saferail-ai-vision-based-image-fusion-distance-estimation-and-object-detection-for-railway-safety",
          title: 'SafeRail-AI: Vision-Based Image Fusion, Distance Estimation, and Object Detection for Railway Safety',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_saferail/";
            },},{id: "projects-gradient-based-recognition-and-localization-of-pathologies-in-chest-radiographs",
          title: 'Gradient-Based Recognition and Localization of Pathologies in Chest Radiographs',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_xray_classification/";
            },},{id: "projects-gpt-nano-a-lightweight-gpt-model-for-text-generation",
          title: 'GPT-Nano: A Lightweight GPT Model for Text Generation',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_gpt_nano/";
            },},{id: "projects-text-guided-image-denoising-via-diffusion-transformer",
          title: 'Text-Guided Image Denoising via Diffusion Transformer',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_text_denoising/";
            },},{id: "projects-railguard-real-time-multimodal-image-fusion-for-object-detection-on-edge-devices",
          title: 'RailGuard: Real-Time Multimodal Image Fusion for Object Detection on Edge Devices',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_railguard/";
            },},{id: "projects-newsqa-automated-question-answer-generation-from-news-articles",
          title: 'NewsQA: Automated Question-Answer Generation from News Articles',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_newsqa/";
            },},{id: "projects-foundcog-fmri-reconstruction-multiband-epi-k-space-pipeline",
          title: 'FoundCog fMRI Reconstruction: Multiband EPI k-Space Pipeline',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_foundcog_reco/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Faizans_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%66%61%69%7A%61%6E@%74%63%64.%69%65", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'Linkedin',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mfaizan-ai/", "_blank");
        },
      },{
        id: 'social-github',
        title: 'Github',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mfaizan-ai", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
