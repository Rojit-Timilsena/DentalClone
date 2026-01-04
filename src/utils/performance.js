// Performance monitoring and optimization utilities
// Provides comprehensive performance tracking and optimization features

// Performance metrics collector
class PerformanceMonitor {
  constructor() {
    this.marks = new Map()
    this.measures = new Map()
    this.observers = new Map()
    this.metrics = {
      navigation: null,
      paint: null,
      resources: [],
      memory: null,
      connection: null
    }
  }

  // Mark a performance point
  mark(name, detail = null) {
    if (!('performance' in window)) return

    try {
      performance.mark(name)
      this.marks.set(name, {
        time: performance.now(),
        detail,
        timestamp: Date.now()
      })
    } catch (error) {
      // Failed to mark performance
    }
  }

  // Measure between two marks
  measure(name, startMark, endMark) {
    if (!('performance' in window)) return null

    try {
      performance.measure(name, startMark, endMark)
      const measure = performance.getEntriesByName(name, 'measure')[0]
      
      if (measure) {
        this.measures.set(name, {
          duration: measure.duration,
          startTime: measure.startTime,
          name: measure.name
        })
        
        // Performance measurement completed
        return measure.duration
      }
    } catch (error) {
      // Failed to measure performance
    }
    
    return null
  }

  // Get navigation timing metrics
  getNavigationMetrics() {
    if (!('performance' in window)) return null

    const navigation = performance.getEntriesByType('navigation')[0]
    if (!navigation) return null

    this.metrics.navigation = {
      // DNS lookup
      dnsLookup: navigation.domainLookupEnd - navigation.domainLookupStart,
      
      // TCP connection
      tcpConnection: navigation.connectEnd - navigation.connectStart,
      
      // SSL negotiation
      sslNegotiation: navigation.secureConnectionStart > 0 
        ? navigation.connectEnd - navigation.secureConnectionStart 
        : 0,
      
      // Request/Response
      requestTime: navigation.responseStart - navigation.requestStart,
      responseTime: navigation.responseEnd - navigation.responseStart,
      
      // DOM processing
      domProcessing: navigation.domContentLoadedEventStart - navigation.responseEnd,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      
      // Load complete
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      
      // Total times
      totalTime: navigation.loadEventEnd - navigation.navigationStart,
      domInteractive: navigation.domInteractive - navigation.navigationStart,
      domComplete: navigation.domComplete - navigation.navigationStart
    }

    return this.metrics.navigation
  }

  // Get paint timing metrics
  getPaintMetrics() {
    if (!('performance' in window)) return null

    const paintEntries = performance.getEntriesByType('paint')
    
    this.metrics.paint = {
      firstPaint: paintEntries.find(entry => entry.name === 'first-paint')?.startTime || null,
      firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || null
    }

    return this.metrics.paint
  }

  // Get resource loading metrics
  getResourceMetrics() {
    if (!('performance' in window)) return []

    const resources = performance.getEntriesByType('resource')
    
    this.metrics.resources = resources.map(resource => ({
      name: resource.name,
      type: this.getResourceType(resource.name),
      duration: resource.duration,
      size: resource.transferSize || resource.encodedBodySize || 0,
      startTime: resource.startTime,
      cached: resource.transferSize === 0 && resource.encodedBodySize > 0
    }))

    return this.metrics.resources
  }

  // Get memory usage (if available)
  getMemoryMetrics() {
    if (!('memory' in performance)) return null

    this.metrics.memory = {
      usedJSHeapSize: performance.memory.usedJSHeapSize,
      totalJSHeapSize: performance.memory.totalJSHeapSize,
      jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
      usedPercentage: (performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit * 100).toFixed(2)
    }

    return this.metrics.memory
  }

  // Get connection information
  getConnectionMetrics() {
    if (!('connection' in navigator)) return null

    this.metrics.connection = {
      effectiveType: navigator.connection.effectiveType,
      downlink: navigator.connection.downlink,
      rtt: navigator.connection.rtt,
      saveData: navigator.connection.saveData
    }

    return this.metrics.connection
  }

  // Determine resource type from URL
  getResourceType(url) {
    if (url.match(/\.(js|jsx|ts|tsx)$/)) return 'script'
    if (url.match(/\.(css|scss|sass)$/)) return 'stylesheet'
    if (url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) return 'image'
    if (url.match(/\.(woff|woff2|ttf|eot)$/)) return 'font'
    if (url.match(/\.(json|xml)$/)) return 'data'
    return 'other'
  }

  // Get comprehensive performance report
  getPerformanceReport() {
    return {
      timestamp: Date.now(),
      navigation: this.getNavigationMetrics(),
      paint: this.getPaintMetrics(),
      resources: this.getResourceMetrics(),
      memory: this.getMemoryMetrics(),
      connection: this.getConnectionMetrics(),
      marks: Object.fromEntries(this.marks),
      measures: Object.fromEntries(this.measures),
      vitals: this.getWebVitals()
    }
  }

  // Get Core Web Vitals
  getWebVitals() {
    const vitals = {}

    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          vitals.lcp = lastEntry.startTime
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      } catch (error) {
        // LCP observation failed
      }
    }

    // First Input Delay (FID) - approximation
    if (this.metrics.navigation) {
      vitals.fid = this.metrics.navigation.domInteractive - this.metrics.navigation.domContentLoaded
    }

    // Cumulative Layout Shift (CLS) - basic implementation
    vitals.cls = 0 // Would need more complex implementation

    return vitals
  }

  // Start monitoring
  startMonitoring() {
    this.mark('monitoring-start')

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            // Long task detected
          })
        })
        longTaskObserver.observe({ entryTypes: ['longtask'] })
        this.observers.set('longtask', longTaskObserver)
      } catch (error) {
        // Long task observation failed
      }
    }

    // Monitor layout shifts
    if ('PerformanceObserver' in window) {
      try {
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (!entry.hadRecentInput) {
              // Layout shift detected
            }
          })
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
        this.observers.set('layout-shift', clsObserver)
      } catch (error) {
        // Layout shift observation failed
      }
    }
  }

  // Stop monitoring
  stopMonitoring() {
    this.observers.forEach((observer) => {
      observer.disconnect()
    })
    this.observers.clear()
    this.mark('monitoring-end')
    this.measure('monitoring-duration', 'monitoring-start', 'monitoring-end')
  }

  // Log performance summary
  logSummary() {
    const report = this.getPerformanceReport()
    
    // Performance summary available in report object
    return report
  }

  // Get resource loading summary
  getResourceSummary(resources) {
    const summary = {}
    
    resources.forEach(resource => {
      if (!summary[resource.type]) {
        summary[resource.type] = {
          count: 0,
          totalSize: 0,
          totalDuration: 0,
          cached: 0
        }
      }
      
      summary[resource.type].count++
      summary[resource.type].totalSize += resource.size
      summary[resource.type].totalDuration += resource.duration
      if (resource.cached) summary[resource.type].cached++
    })
    
    // Calculate averages and format
    Object.keys(summary).forEach(type => {
      const data = summary[type]
      data.avgSize = Math.round(data.totalSize / data.count)
      data.avgDuration = Math.round(data.totalDuration / data.count)
      data.totalSizeKB = Math.round(data.totalSize / 1024)
      data.cacheHitRate = Math.round((data.cached / data.count) * 100)
    })
    
    return summary
  }
}

// Bundle size analyzer
export class BundleAnalyzer {
  constructor() {
    this.chunks = new Map()
    this.totalSize = 0
  }

  // Analyze loaded chunks
  analyzeChunks() {
    if (!('performance' in window)) return

    const resources = performance.getEntriesByType('resource')
    
    resources.forEach(resource => {
      if (resource.name.includes('.js') || resource.name.includes('.css')) {
        const size = resource.transferSize || resource.encodedBodySize || 0
        const name = this.getChunkName(resource.name)
        
        this.chunks.set(name, {
          url: resource.name,
          size,
          sizeKB: Math.round(size / 1024),
          duration: resource.duration,
          cached: resource.transferSize === 0 && resource.encodedBodySize > 0
        })
        
        this.totalSize += size
      }
    })
  }

  // Extract chunk name from URL
  getChunkName(url) {
    const parts = url.split('/')
    const filename = parts[parts.length - 1]
    return filename.split('-')[0] || filename
  }

  // Get bundle analysis report
  getReport() {
    this.analyzeChunks()
    
    const chunks = Array.from(this.chunks.entries()).map(([name, data]) => ({
      name,
      ...data,
      percentage: ((data.size / this.totalSize) * 100).toFixed(1)
    }))
    
    chunks.sort((a, b) => b.size - a.size)
    
    return {
      totalSize: this.totalSize,
      totalSizeKB: Math.round(this.totalSize / 1024),
      totalSizeMB: (this.totalSize / (1024 * 1024)).toFixed(2),
      chunkCount: chunks.length,
      chunks,
      recommendations: this.getRecommendations(chunks)
    }
  }

  // Get optimization recommendations
  getRecommendations(chunks) {
    const recommendations = []
    
    // Large chunks
    const largeChunks = chunks.filter(chunk => chunk.sizeKB > 250)
    if (largeChunks.length > 0) {
      recommendations.push({
        type: 'warning',
        message: `Large chunks detected: ${largeChunks.map(c => c.name).join(', ')}`,
        suggestion: 'Consider code splitting or removing unused dependencies'
      })
    }
    
    // Total bundle size
    if (this.totalSize > 500 * 1024) { // 500KB
      recommendations.push({
        type: 'error',
        message: `Total bundle size is ${Math.round(this.totalSize / 1024)}KB`,
        suggestion: 'Bundle size should be under 500KB for optimal performance'
      })
    }
    
    // Uncached resources
    const uncachedChunks = chunks.filter(chunk => !chunk.cached)
    if (uncachedChunks.length === chunks.length) {
      recommendations.push({
        type: 'info',
        message: 'No cached resources detected',
        suggestion: 'Implement proper caching headers for better performance'
      })
    }
    
    return recommendations
  }

  // Log bundle analysis
  logAnalysis() {
    const report = this.getReport()
    
    // Bundle analysis available in report object
    return report
  }
}

// Create singleton instances
export const performanceMonitor = new PerformanceMonitor()
export const bundleAnalyzer = new BundleAnalyzer()

// Utility functions
export const measureAsync = async (name, asyncFunction) => {
  performanceMonitor.mark(`${name}-start`)
  try {
    const result = await asyncFunction()
    performanceMonitor.mark(`${name}-end`)
    performanceMonitor.measure(name, `${name}-start`, `${name}-end`)
    return result
  } catch (error) {
    performanceMonitor.mark(`${name}-error`)
    performanceMonitor.measure(`${name}-error`, `${name}-start`, `${name}-error`)
    throw error
  }
}

export const measureSync = (name, syncFunction) => {
  performanceMonitor.mark(`${name}-start`)
  try {
    const result = syncFunction()
    performanceMonitor.mark(`${name}-end`)
    performanceMonitor.measure(name, `${name}-start`, `${name}-end`)
    return result
  } catch (error) {
    performanceMonitor.mark(`${name}-error`)
    performanceMonitor.measure(`${name}-error`, `${name}-start`, `${name}-error`)
    throw error
  }
}

// Performance optimization helpers
export const debounce = (func, delay) => {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), delay)
  }
}

export const throttle = (func, delay) => {
  let timeoutId
  let lastExecTime = 0
  return function (...args) {
    const currentTime = Date.now()
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args)
      lastExecTime = currentTime
    } else {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func.apply(this, args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}

// Initialize performance monitoring in development
if (import.meta.env.DEV) {
  performanceMonitor.startMonitoring()
  
  // Log performance summary after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      performanceMonitor.logSummary()
      bundleAnalyzer.logAnalysis()
    }, 2000)
  })
}

export default performanceMonitor