import { Component, createSignal, For, Match, Switch } from "solid-js";
import bubbleSort from "./algorithms/bubbleSort";
import heapSort from "./algorithms/heapSort";
import insertionSort from "./algorithms/insertionSort";
import mergeSort from "./algorithms/mergeSort";

const maxHeight = window.innerHeight - 300;

const createArr = () => {
  setWidth(window.innerWidth / size());
  let arr: number[] = [];
  while (arr.length < size()) {
    let rand = Math.ceil(Math.random() * maxHeight);
    if (!arr.includes(rand)) arr.push(rand);
  }
  return arr;
};

const [running, setRunning] = createSignal(false);

const [size, setSize] = createSignal(window.innerWidth > 600 ? 80 : 30);
const [speed, setSpeed] = createSignal(3);
const [width, setWidth] = createSignal(window.innerWidth / size());

const [algorithm, setAlgorithm] = createSignal("bubble");
const [arr, setArr] = createSignal(createArr());

window.addEventListener("resize", () => {
  setSize(window.innerWidth > 600 ? 80 : 30);
  setArr(createArr());
});

const onSizeChange = (e: Event) => {
  setSize(parseInt((e.target as HTMLInputElement).value));
  setArr(createArr());
};

const onSpeedChange = (e: Event) => {
  setSpeed(parseInt((e.target as HTMLInputElement).value));
};

const speedMap: { [key: number]: number } = {
  1: 100,
  2: 70,
  3: 50,
  4: 10,
  5: 1,
};

const onStart = () => {
  setRunning(true);
  const selectedAlgorithm = algorithm();
  const currentArr = arr();
  let snapshots: number[][];
  switch (selectedAlgorithm) {
    case "bubble":
      snapshots = bubbleSort(currentArr);
      break;
    case "heap":
      snapshots = heapSort(currentArr);
      break;
    case "insertion":
      snapshots = insertionSort(currentArr);
      break;
    case "merge":
      snapshots = mergeSort(currentArr);
      break;
    default:
      snapshots = [];
  }

  let i = 0;
  const timerId = setInterval(() => {
    setArr(snapshots[i]);
    if (i !== 0) setArr(snapshots[i - 1]);
    ++i;
    if (i === snapshots.length) {
      clearInterval(timerId);
    }
  }, speedMap[speed()]);
};

const Canvas: Component = () => {
  return (
    <div class='canvas'>
      <ul>
        <For each={arr()}>
          {(item) => (
            <li
              class='bar'
              style={{
                height: `${item}px`,
                width: `${width()}px`,
                "background-color": "",
              }}
            />
          )}
        </For>
      </ul>
    </div>
  );
};

const App: Component = () => {
  return (
    <>
      <Header />
      <Info />
      <Canvas />
      <Footer />
    </>
  );
};

const Footer: Component = () => {
  return (
    <footer>
      <a
        href='https://github.com/renatomce/sort-algos'
        target='_blank'
        class='rep'
      >
        <h3 class='link'>Repository on GitHub &#x1f517</h3>
      </a>
    </footer>
  );
};

const Header: Component = () => {
  return (
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
          max='200'
          value={size()}
          step='1'
          onChange={onSizeChange}
          class='sliders'
          id='size'
        />
        <h2>Speed</h2>
        <input
          type='range'
          min='1'
          max='5'
          step='1'
          value={speed()}
          onChange={onSpeedChange}
          class='sliders'
          id='speed'
        />
        {running() ? (
          <button class='pause' onClick={() => setRunning(false)}>
            <b>PAUSE</b>
          </button>
        ) : (
          <button class='start' onClick={onStart}>
            <b>START</b>
          </button>
        )}
        <button class='restart' onClick={() => setRunning(false)}>
          <b>RESET</b>
        </button>
      </nav>
    </header>
  );
};

const Info: Component = () => {
  return (
    <div class='information'>
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
    </div>
  );
};

export default App;
