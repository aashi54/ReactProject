import { Suspense } from 'react';

/*


Displaying a fallback while content is loading.


Revealing content together at once.
<Suspense fallback={<Loading />}>
  <Biography />
  <Panel>
    <Albums />
  </Panel>
</Suspense>


Revealing nested content as it loads (nested suspend bna skte he)
you can do lazy loading

*/
