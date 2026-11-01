/**
 * Portfolio projects rendered in the horizontal "Projects" gallery.
 */
export type Project = {
  title: string;
  tag: string;
  date: string;
  image: string;
  href: string;
  description: string;
};

export const projects: Project[] = [
  { title: "Covid-19 Tracker", tag: "Android", date: "Apr 10th, 2020", image: "img/cvd.png", href: "https://github.com/sahilsood/Covid-19-Tracker", description: "Tracks the latest COVID-19 cases across the US with state-specific data. Built with Kotlin, Android Architecture Components, Retrofit, MVVM, and Coroutines." },
  { title: "CLT Central", tag: "Android", date: "Mar 20th, 2020", image: "img/clt.png", href: "https://play.google.com/store/apps/details?id=xyz.sahilsood.cltconcerts", description: "Published on Google Play — discover Charlotte events with custom notifications and reminders. MVVM, Jetpack Navigation, Retrofit, Room, GSON, LiveData." },
  { title: "Daily Weather Radar", tag: "Android", date: "Mar 10th, 2020", image: "img/weather.png", href: "https://github.com/sahilsood/Daily-Weather-App", description: "Daily weather and forecasts with dynamic background changes, autocomplete location search, and filters. Retrofit, MVVM, LiveData, GSON." },
  { title: "Stocks Live!", tag: "Android", date: "Feb 15th, 2020", image: "img/stocks.png", href: "https://github.com/sahilsood/Stocks-Live-App", description: "Real-time stock updates every 3 seconds via WebSocket + REST, using RxJava, MVVM, and Google architecture components." },
  { title: "Sticky Notes App", tag: "Android", date: "Jan 20th, 2020", image: "img/notes.png", href: "https://github.com/sahilsood/Sticky-Notes-App", description: "Sticky-note style note-taking app built with MVVM and androidx, persisting data locally with Room, SQLite, and LiveData." },
  { title: "Backpack Planner", tag: "Android", date: "Dec 2nd, 2019", image: "img/snowsoul.png", href: "https://github.com/sahilsood/Backpack-Planner", description: "Create or join trips, add friends, and chat in trip-specific rooms. Google Auth, Firebase, Firestore, Google Places API, and Jetpack Navigation." },
  { title: "Urban Trajectory Visualization", tag: "Research", date: "Apr 10th, 2019", image: "img/urbn.png", href: "https://github.com/sahilsood/UrbanTrajectoryVisualizationSystem", description: "Visual analytics prototype for exploring massive urban taxi-trajectory datasets through interactive visual interfaces." },
  { title: "N-Queens by Hill-Climbing", tag: "Algorithms", date: "Nov 30th, 2018", image: "img/hill.png", href: "https://github.com/sahilsood/NQueensHillClimbing", description: "Solving the classic NP-complete N-Queens problem using a hill-climbing search heuristic." },
  { title: "Analysis of Sorting Algorithms", tag: "Algorithms", date: "Nov 30th, 2018", image: "img/algo.png", href: "https://github.com/sahilsood/ComparisonBasedSortingAlgorithms", description: "Benchmarked comparison-based sorts and built a hybrid Quicksort + Insertion Sort that ran ~15% faster than plain Quicksort." },
  { title: "Graph Algorithms", tag: "Algorithms", date: "Sep 15th, 2018", image: "img/mst.png", href: "https://github.com/sahilsood/GraphsAlgorithms", description: "Single-source shortest paths (Dijkstra) plus Minimum Spanning Tree (Kruskal/Prim) on weighted directed and undirected graphs." },
  { title: "8-Puzzle using A*", tag: "Algorithms", date: "Sep 16th, 2018", image: "img/8puzz.png", href: "https://github.com/sahilsood/8PuzzleUsingAStar", description: "Optimal solution of the sliding 8-puzzle using A* graph search over the NP-hard solution space." },
  { title: "BugFix", tag: "Web", date: "Dec 30th, 2015", image: "img/bf.png", href: "https://github.com/sahilsood/BugFix", description: "A Stack Overflow-style Q&A repository / MIS app where users ask and answer questions, built with J2EE, JSP, Servlets, and MySQL." },
];
