import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

function startIconLibrary() {
  const icons = [faChevronLeft, faChevronRight];

  library.add(...icons);
}

export default startIconLibrary;
