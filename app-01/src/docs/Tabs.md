The following tab components are being imported remotely from "app-02".

Note that your browser's route is `/routing/<tab1|tab2>` depending on which tab is active.

If you open [http://localhost:3002](http://localhost:3002) you will see the same tab components at the root level.

The "Tab2" tab also lazily renders the styled-component `Button` from the [UI Library](http://localhost:3003) demo only when rendered.
