import '@/styles/global.css'

import {
	createHashHistory,
	createRouter,
	RouterProvider,
} from '@tanstack/react-router'
import React from 'react'
import reactDom from 'react-dom/client'

const hashHistory = createHashHistory()

import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree, history: hashHistory })

reactDom.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
