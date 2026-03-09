/* Intake Health Help Center — Client-Side Search */
(function () {
  'use strict';

  var articles = [
    {
      title: 'Product Overview',
      url: 'articles/product-overview.html',
      keywords: 'inflow hydration monitor device sensor LED green yellow red blue white battery optical urine color sports athletes teams MLB NBA NFL NHL MLS university collegiate industrial InLoo female',
      sections: [
        'What Is InFlow — battery-powered hydration monitoring device attaches inside urinal, tests hydration automatically, green yellow red light',
        'How InFlow Works — optical sensor technology analyzes urine color and concentration in real time',
        'What the Lights Mean — Green well hydrated, Yellow mildly dehydrated, Red significantly dehydrated, Blue battery low, White error',
        'Key Features — passive effortless, instant visual feedback, 4000 tests per charge, wireless charging, no consumable parts, durable sanitary design, custom Actiongraphic',
        'Who Uses InFlow — professional sports MLB NBA NFL NHL MLS, 200+ Division I universities, industrial workplace oil platforms manufacturing',
        'The Science Behind InFlow — urine color clinical indicator, optical spectroscopy, B vitamins medications can affect results',
        'Coming Soon InLoo — toilet-mounted version for environments without urinals, women locker rooms'
      ]
    },
    {
      title: 'Setup & Installation',
      url: 'articles/setup-and-installation.html',
      keywords: 'install mount setup suction cups hot water urinal Actiongraphic sign custodial cleaning female athletes industrial workplace InLoo box unboxing cartridge cup charger',
      sections: [
        'What is in the Box — InFlow Cartridge, InFlow Cup, wireless charging base, Actiongraphic, wall-safe mounts, custodial care card',
        'Step 1 Mount InFlow — run suction cups under hot water 30 seconds, press firmly against back of urinal 6 inches above drain, mount vertically',
        'Step 2 Attach Actiongraphic — mount above urinal at eye level, customize with hydration protocols',
        'Step 3 Just Go — direct urine into cup, keep full until result appears, green yellow red',
        'How Many Units Do I Need — one per urinal, small facility 4 units, standard locker room 8-16, large facility 16+',
        'Setting Up Custodial Staff — do not use HCL based cleaners, rinse weekly with water, no stiff bristle brushes',
        'Using InFlow with Female Athletes — place in sink or bathtub with cup, InLoo in development',
        'Installing in Industrial Workplace — 24 hour shift environments need more charging, not waterproof, humidity maintenance every 3 months'
      ]
    },
    {
      title: 'Charging & Maintenance',
      url: 'articles/charging-and-maintenance.html',
      keywords: 'charge battery wireless charger humidity maintenance desiccant cleaning rinse HCL lease program cartridge sensor pin lens',
      sections: [
        'When to Charge — flashing blue light battery low, red dot battery getting low, every 3 to 8 weeks',
        'How to Charge — remove cartridge magnets, rinse and dry, wireless charge red light green when done, 2 hours full charge',
        'Charging Safety — use only InFlow charger, plug into wall outlet, not USB port, lithium battery hazardous do not trash',
        'Humidity Maintenance — moisture vapor permeates housing, degrades battery and sensor, fixable and preventable',
        'When to Perform — standard every 6 months, humid environments every 3 months, any unit performing poorly',
        'Humidity Maintenance Process — remove clean, dry 24 hours, dehumidify with desiccant 72 hours in ziplock bag, recharge reinstall',
        'Desiccant Packet Care — reusable, bake at 200F for 90 minutes, store in sealed bag',
        'Routine Cleaning — rinse weekly with water, non-HCL cleaners okay if rinsed, never use hydrochloric acid toilet bowl cleaners',
        'Lease Program maintenance-free option — fresh units on rotation every 3-6 months'
      ]
    },
    {
      title: 'Troubleshooting & FAQ',
      url: 'articles/troubleshooting-and-faq.html',
      keywords: 'troubleshoot fix problem not working charging error white light suction cups inaccurate results battery life dead unit FAQ questions answers B vitamins medication warranty replacement',
      sections: [
        'InFlow won\'t charge no red light — check moisture damage clear window back, check charging connection wall outlet, check charge history warranty replacement',
        'InFlow not running tests no light — battery dead charge it, not installed vertically, cup blocked, suction cups lost grip',
        'InFlow flashing white lights — device error contact support do not attempt repair',
        'InFlow flashes on charger — poor wireless connection, remove wait 8 seconds reconnect',
        'Suction cups not staying on urinal — run under hot water 30-60 seconds to soften',
        'Inaccurate results — B vitamins bright yellow, medications thyroid, menstrual blood, just drank water takes 12-24 hours, needs humidity maintenance',
        'Battery life shorter than expected — internal humidity buildup, perform desiccant maintenance',
        'Dead unit won\'t revive — try humidity maintenance first, contact support if still unresponsive',
        'Solid white light error state — warranty replacement required, contact support',
        'What cleaners are safe — water safe, non-HCL cleaners safe, hydrochloric acid not safe, stiff brushes not safe',
        'FAQ — measures urine concentration optical spectroscopy, not medical device, no app required, works for female athletes with cup',
        'How long battery lasts — 4000 tests per charge, 3-8 weeks',
        'Humidity maintenance frequency — every 6 months standard, 3 months humid',
        'How long units last — 2+ seasons, no consumable parts',
        'Warranty — 1 year from purchase, replacement shipped with prepaid return label',
        'How to dispose — do not trash, lithium battery, contact support',
        'Exchange model hot-swap cartridges — lease program fresh units every 3 months maintenance handled'
      ]
    },
    {
      title: 'Returns & Lease Program',
      url: 'articles/returns-and-lease-program.html',
      keywords: 'return lease program RMA exchange swap fresh units maintenance-free rotation prepaid shipping label ziplock charcoal filter disposal recycle lithium battery',
      sections: [
        'Lease Program — eliminates maintenance burden, fresh units every 3-6 months, swap old units, Intake Health refurbishes',
        'Why Lease — no charging hassle, no humidity maintenance, always fresh units, predictable annual cost, simplified operations',
        'Lease Pricing — 4 units $3300 per year, 8 units $5220 per year',
        'Return Kit — ZipLock bag, charcoal filters, InFlow box, prepaid shipping label, keep do not throw away',
        'Storing Units Before Return — rinse dry, place in bag unzipped, charcoal filter on top',
        'How to Return — rinse dry, up to 4 InFlows per bag, zip seal ship with prepaid label',
        'RMA Return Merchandise Authorization — warranty claims, product exchange or repair, distributor returns',
        'How to Request RMA — email support with name organization item quantity reason',
        'RMA Conditions — unused factory sealed for credit, inspection determines credit, no RMA number no acceptance',
        'Product Disposal — lithium battery do not trash, contact support for recycling instructions'
      ]
    },
    {
      title: 'Pricing & Purchasing',
      url: 'articles/pricing-and-purchasing.html',
      keywords: 'price cost buy purchase lease order quote single unit master carton volume discount distributor reseller international shipping procurement',
      sections: [
        'Purchase Pricing — single unit $800, master carton 64 units 15% discount',
        'Purchase includes — cartridge cup wireless charger Actiongraphic wall mounts custodial card',
        'Lease Pricing — 4 units $3300 per year, 8 units $5220 per year, includes maintenance rotation',
        'Purchase vs Lease — purchase if staff capacity one-time cost small setup own equipment, lease if zero maintenance fresh units 4+ units predictable cost',
        'Volume Discounts — master carton 64 units 15% off',
        'How to Order — direct from Intake Health, ships same next business day',
        'Distributor Reseller — available through select distributors, formal quote for procurement',
        'International Orders — contact support for shipping options',
        'Pro sports team scenario — 16 units lease $5220 per year or purchase with volume pricing',
        'Oil rig scenario — 8 units or lease, extra backup for 24-hour operations',
        'University scenario — start with 4-8 units, lease available'
      ]
    }
  ];

  // Determine base path
  var isSubpage = window.location.pathname.indexOf('/articles/') !== -1;
  var basePath = isSubpage ? '../' : '';

  // Fix URLs based on path
  var searchArticles = articles.map(function (a) {
    return {
      title: a.title,
      url: basePath + a.url,
      keywords: a.keywords,
      sections: a.sections
    };
  });

  function init() {
    var input = document.querySelector('.search-input');
    var results = document.querySelector('.search-results');
    if (!input || !results) return;

    input.addEventListener('input', function () {
      var query = this.value.trim().toLowerCase();
      if (query.length < 2) {
        results.classList.remove('active');
        results.innerHTML = '';
        return;
      }
      var matches = search(query);
      render(matches, query, results);
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        results.classList.remove('active');
        input.blur();
      }
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.search-wrapper')) {
        results.classList.remove('active');
      }
    });
  }

  function search(query) {
    var terms = query.split(/\s+/).filter(Boolean);
    var scored = [];

    searchArticles.forEach(function (article) {
      var score = 0;
      var matchedSection = '';

      terms.forEach(function (term) {
        if (article.title.toLowerCase().indexOf(term) !== -1) score += 10;
        if (article.keywords.toLowerCase().indexOf(term) !== -1) score += 3;

        article.sections.forEach(function (section) {
          if (section.toLowerCase().indexOf(term) !== -1) {
            score += 2;
            if (!matchedSection) matchedSection = section;
          }
        });
      });

      if (score > 0) {
        scored.push({ article: article, score: score, snippet: matchedSection || article.sections[0] });
      }
    });

    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.slice(0, 8);
  }

  function render(matches, query, container) {
    if (matches.length === 0) {
      container.innerHTML = '<div class="search-no-results">No results found for "' + escapeHtml(query) + '"</div>';
      container.classList.add('active');
      return;
    }

    var html = '';
    matches.forEach(function (m) {
      var snippet = m.snippet;
      if (snippet.length > 120) snippet = snippet.substring(0, 120) + '...';
      snippet = highlightTerms(escapeHtml(snippet), query);

      html += '<a class="search-result-item" href="' + m.article.url + '">';
      html += '<div class="result-title">' + escapeHtml(m.article.title) + '</div>';
      html += '<div class="result-snippet">' + snippet + '</div>';
      html += '</a>';
    });

    container.innerHTML = html;
    container.classList.add('active');
  }

  function highlightTerms(text, query) {
    var terms = query.split(/\s+/).filter(Boolean);
    terms.forEach(function (term) {
      var regex = new RegExp('(' + escapeRegex(term) + ')', 'gi');
      text = text.replace(regex, '<mark>$1</mark>');
    });
    return text;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
