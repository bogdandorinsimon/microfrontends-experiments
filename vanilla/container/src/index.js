/*
refactor the entry point to load asynchronously. This will give webpack the indicator that before executing the bootstrap.js code
it needs to fetch some code from the remote projects.
*/

import("./bootstrap");
