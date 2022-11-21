const enLocales = {
  translation: {
    signUp: {
      pageHeader: 'Registration',
      emailLabel: 'Email',
      usernameLabel: 'Login',
      passwordLabel: 'Password',
      confirmPasswordLabel: 'Confirm password',
      registerButton: 'Sign up',
      signUpFailed: 'This user already exists',
      footer: {
        signInHeader: 'Already have an account? ',
        signIn: 'Sign in',
      },
      validation: {
        requiredField: 'Required field',
        correctUsername: 'Enter a valid login',
        correctEmail: 'Incorrect email',
        usernameLength: 'From 3 to 20 characters',
        passwordLength: 'from 8 to 30 characters',
        confirmPassword: 'Passwords must be the same',
      },
    },
    remindPass: {
      pageHeader: 'Forgot password?',
      emailLabel: 'Email',
      resetButton: 'Recover password',
      footer: {
        signUpHeader: 'No account? ',
        signUp: 'Create a free account',
        signInHeader: 'Already have an account? ',
        signIn: 'Sign in',
      },
      validation: {
        correctEmail: 'Incorrect email',
      },
    },
    signIn: {
      pageHeader: 'Enter',
      emailLabel: 'Email',
      passwordLabel: 'Password',
      loginButton: 'Log in',
      remindPass: `I can't remember the password`,
      signInFailed: 'Wrong password or email',
      footer: {
        signUpHeader: 'No account? ',
        signUp: 'Create a free account',
      },
    },
    profile: {
      replsHeader: 'Snippets',
      username: 'Username:',
      createdAt: 'Created:',
      userId: 'User id:',
      email: 'Email:',
      editProfileButton: 'Edit',
      copyProfileButton: 'Copy link',
      openReplButton: 'Open',
      shareReplButton: 'Share',
      renameReplButton: 'Rename',
      deleteReplButton: 'Delete',
      newReplButton: 'A new Snippet',
    },
    navbar: {
      mainLabel: 'Editor',
      menu: 'Menu',
      home: 'Home',
      myRepls: 'My Snippets',
      profile: 'Profile',
      about: 'About',
      logout: 'Log out',
      signIn: 'Sign in',
      signUp: 'Sign up',
    },
    footer: {
      about: 'About',
      carerr: 'Careers at Hexlet',
      shop: 'Merch Shop',
      doc: 'Documents',
      conditions: 'Terms of Use',
      agreement: 'Privacy',
      offer: 'Public offer',
      promo: 'Promo',
      tel1: '8 800 100 22 47',
      tel1Href: 'tel:88001002247',
      rf: ' free call in Russia',
      tel2: '+1 (786) 405 80 44',
      tel2Href: 'tel:17864058044',
      moscow: ' free in Moscow',
      name: 'Hexlet Ltd.',
      city: '00210 Helsinki, Finland',
      street: 'Itälahdenkatu 22 A',
      ogrn: 'VAT ID: FI26641607 ',
      study: 'Study',
      programs: 'Professions from scratch',
      courses: 'All courses',
      individually: 'Individual training',
      teams: 'Corporate training',
      read: 'Read',
      success: 'Success Stories',
      feedback: 'Student Reviews',
      blog: 'Blog',
      questions: 'Testimonials',
      recommended: 'Recommended books',
      subscribe: 'Subscribe',
      help: 'Help',
      info: 'Info',
      qna: 'Q&A',
      mail: 'support@hexlet.io',
      mailHref: 'mailto:support@hexlet.io',
      improve: 'Improve Hexlet',
      project: 'Projects',
      college: 'Hexlet College',
      codeBasics: 'Code Basics',
      codeBattle: 'Codebattle',
      guides: 'Hexlet Guides',
      cv: 'Хекслет CV',
      language: 'Language',
      en: 'English',
      ru: 'Русский',
    },
    embedFrame: {
      runButton: 'Run',
      logoOffer: 'Try on the',
      logo: 'Runit',
    },
    editor: {
      authBanner: 'Log in to edit',
      runButton: 'Run',
      shareButton: 'Share',
    },
    modals: {
      share: {
        header: 'Save to share.',
        copyLinkButton: 'Copy Link',
        linkTab: 'Link',
        copyEmbedButton: 'Copy Code',
        embedTab: 'Embed code',
        saveSnippetButton: 'Save',
        saveSnippetTab: 'Save Snippet',
        snippetNameLabel: 'Enter a name',
        snippetLinkLabel: 'Link to Snippet',
        snippetEmbedLabel: 'Snippet code for insertion',
      },
      newSnippetName: 'Snippet Name',
      signInButton: 'Sign in',
      signUpButton: 'Создать аккаунт',
      signInHeader: 'Sign in',
      signUpHeader: 'Sign up',
      infoBody: 'Log in to save and share.',
      cancelButton: 'Cancel',
      goToReplButton: 'Go to this replay',
      validation: {
        snippetNameMaxLength: 'No more than 20 characters',
        required: `Can't be empty`,
        singleWord: 'Allowed latin letters, numders and sybmols"-_"',
      },
    },
    errors: {
      unknown: 'Unknown error',
      network: 'Network error',
    },
  },
};

export default enLocales;