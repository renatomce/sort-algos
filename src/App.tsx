import { Accessor, Component, createSignal, Match, Switch } from "solid-js";

const [algorithm, setAlgorithm] = createSignal("bubble");

const App: Component = () => {
  const [running, setRunning] = createSignal(false);

  const [size, setSize] = createSignal(20);
  const [speed, setSpeed] = createSignal(1);
  return (
    <>
      <header>
        <nav>
          <a href='/' class='title'>
            <h1 class='link'>Sortalgos</h1>
          </a>
          <button class='hamburger hamburger--collapse' type='button' id='menu'>
            <span class='hamburger-box'>
              <span class='hamburger-inner'></span>
            </span>
          </button>
          <h2>Algorithm</h2>
          <select
            class='dropdown'
            name='algorithm'
            onChange={(e) => setAlgorithm((e.target as HTMLInputElement).value)}
          >
            <option value='bubble'>Bubble</option>
            <option value='insertion'>Insertion</option>
            <option value='merge'>Merge</option>
            <option value='heap'>Heap</option>
          </select>
          <h2>Size</h2>
          <input
            type='range'
            min='20'
            step='1'
            value={size()}
            onChange={(e) =>
              setSize(parseInt((e.target as HTMLInputElement).value))
            }
            class='sliders'
            id='size'
          />
          <h2>Speed</h2>
          <input
            type='range'
            min='.05'
            max='5.05'
            value={speed()}
            onChange={(e) =>
              setSpeed(parseFloat((e.target as HTMLInputElement).value))
            }
            class='sliders'
            id='speed'
          />
          {running() ? (
            <button class='pause' onClick={() => setRunning(false)}>
              <b>PAUSE</b>
            </button>
          ) : (
            <button class='start' onClick={() => setRunning(true)}>
              <b>START</b>
            </button>
          )}
          <button class='restart' onClick={() => setRunning(false)}>
            <b>RESET</b>
          </button>
        </nav>
      </header>
      <div class='information'></div>
      <Info />
      <footer>
        <a
          href='https://github.com/renatomce/sort-algos'
          target='_blank'
          class='rep'
        >
          <h3 class='link'>Repository on GitHub &#x1f517</h3>
        </a>
      </footer>
    </>
  );
};

const Info: Component = () => {
  return (
    <Switch fallback={<></>}>
      <Match when={algorithm() === "bubble"}>
        <span class='bubble-info'>
          <p class='mr15-mt3'>
            <b>Algorithm:</b> Bubble sort
          </p>
          <div class='break'></div>
          <p class='mr15-mt3'>
            <b>Method:</b> Exchanging
          </p>
          <div class='break'></div>
          <p class='mr15-mt3'>
            <b>Average Performance:</b>
            <span class='bad-performance'>О(n²)</span>
          </p>
          <div class='break'></div>
          <p class='mr15-mt3'>
            <b>Stable:</b> <span class='good-performance'>Yes</span>
          </p>
          <div class='break'></div>
          <a
            href='https://en.wikipedia.org/wiki/Bubble_sort'
            target='_blank'
            class='more-info'
          >
            <img
              src='./static/images/more-info.png'
              title='More information (Wikipedia)'
              class='info-img'
            />
          </a>
        </span>
      </Match>
      <Match when={algorithm() === "insertion"}>
        <span class='insertion-info'>
          <p class='mr15-mt3'>
            <b>Algorithm:</b> Insertion sort
          </p>
          <div class='break'></div>
          <p class='mr15-mt3'>
            <b>Method:</b> Insertion
          </p>
          <div class='break'></div>
          <p class='mr15-mt3'>
            <b>Average Performance:</b>
            <span class='bad-performance'>О(n²)</span>
          </p>
          <div class='break'></div>
          <p class='mr15-mt3'>
            <b>Stable:</b> <span class='good-performance'>Yes</span>
          </p>
          <div class='break'></div>
          <a
            href='https://en.wikipedia.org/wiki/Insertion_sort'
            target='_blank'
            class='more-info'
          >
            <img
              src='./static/images/more-info.png'
              title='More information (Wikipedia)'
              class='info-img'
            />
          </a>
        </span>
      </Match>
      <Match when={algorithm() === "merge"}>
        {" "}
        <span class='merge-info'>
          <p class='mr15-mt3'>
            <b>Algorithm:</b> Merge sort
          </p>
          <div class='break'></div>
          <p class='mr15-mt3'>
            <b>Method:</b> Merging
          </p>
          <div class='break'></div>
          <p class='mr15-mt3'>
            <b>Average Performance:</b>
            <span class='good-performance'>
              О(n <i>log</i> n)
            </span>
          </p>
          <div class='break'></div>
          <p class='mr15-mt3'>
            <b>Stable:</b> <span class='good-performance'>Yes</span>
          </p>
          <div class='break'></div>
          <a
            href='https://en.wikipedia.org/wiki/Merge_sort'
            target='_blank'
            class='more-info'
          >
            <img
              src='./static/images/more-info.png'
              title='More information (Wikipedia)'
              class='info-img'
            />
          </a>
        </span>
      </Match>
      <Match when={algorithm() === "heap"}>
        {" "}
        <span class='heap-info'>
          <p class='mr15-mt3'>
            <b>Algorithm:</b> Heap sort
          </p>
          <div class='break'></div>
          <p class='mr15-mt3'>
            <b>Method:</b> Selection
          </p>
          <div class='break'></div>
          <p class='mr15-mt3'>
            <b>Average Performance:</b>
            <span class='good-performance'>
              О(n <i>log</i> n)
            </span>
          </p>
          <div class='break'></div>
          <p class='mr15-mt3'>
            <b>Stable:</b> <span class='bad-performance'>No</span>
          </p>
          <div class='break'></div>
          <a
            href='https://en.wikipedia.org/wiki/Heapsort'
            target='_blank'
            class='more-info'
          >
            <img
              src='./static/images/more-info.png'
              title='More information (Wikipedia)'
              class='info-img'
            />
          </a>
        </span>
      </Match>
    </Switch>
  );
};

export default App;
