Q1: What is a Module, and what does it contain?  
Add to PDF Entry
Answer
An Angular module is set of Angular basic building blocks like component, directives, services etc. An app can have more than one module.
A module can be created using @NgModule decorator.
@NgModule({
imports: [ BrowserModule ],
declarations: [ AppComponent ],
bootstrap: [ AppComponent ]
})
export class AppModule { }
Source: stackoverflow.com

Q2: What is Routing Guard in Angular?  
Add to PDF Entry
Q3: How would you run unit test?  
Add to PDF Junior
Q4: What is the equivalent of ngShow and ngHide in Angular?  
Add to PDF Junior
Q5: What is the difference between @Component and @Directive in Angular?  
Add to PDF Junior
Q6: What is a bootstrapping module?  
Add to PDF Junior
Q7: What is the minimum definition of a Component?  
Add to PDF Junior
Q8: What is a Component? Why would you use it?  
Add to PDF Junior
Q9: What are the differences between AngularJS (angular 1.x) and Angular (Angular 2.x and beyond)?  
Add to PDF Junior
Q10: What is Interpolation?  
Add to PDF Junior
Q11: What is the difference between \*ngIf vs [hidden]?  
Add to PDF Junior
Q12: What are Observables?  
Add to PDF Junior
Q13: What is the difference between Structural and Attribute directives in Angular?  
Add to PDF Junior
Q14: What is a Service, and when will you use it?  
Add to PDF Junior
Q15: What's the difference between an Angular Component and Module?  
Add to PDF Junior
Q16: How would you protect a component being activated through the router?  
Add to PDF Junior
Q17: You have an HTML response I want to display. How do I do that?  
Add to PDF Junior
Q18: What is an Observer?  
Add to PDF Junior
Q19: What is an Observable?  
Add to PDF Junior
Q20: What is the purpose of base href tag?  
Add to PDF Junior
Q21: How do you categorize data binding types?  
 Add to PDF Mid
Q22: What is the purpose of Wildcard route?  
 Add to PDF Mid
Q23: When would you use eager module loading?  
 Add to PDF Mid
Q24: How to inject base href?  
 Add to PDF Mid
Q25: How do you perform error handling in Observables?  
 Add to PDF Mid
Q26: Explain how Custom Elements works internally?  
 Add to PDF Mid
Q27: What are Custom elements?  
 Add to PDF Mid
Q28: What are dynamic components?  
 Add to PDF Mid
Q29: What is the option to choose between Inline and External template file?  
 Add to PDF Mid
Q30: Why should ngOnInit be used, if we already have a constructor?  
 Add to PDF Mid
Q31: What is Multicasting?  
 Add to PDF Mid
Q32: How do you perform Error Handling for HttpClient?  
 Add to PDF Mid
Q33: What is the difference between @Component and @Directive in Angular?  
 Add to PDF Mid
Q34: What is difference between declarations, providers and import in NgModule?  
 Add to PDF Mid
Q35: What is the use of Codelyzer?  
 Add to PDF Mid
Q36: What is the difference between promise and observable?  
 Add to PDF Mid
Q37: What is Angular Ivy?  
 Add to PDF Mid
Q38: Explain the difference between Promise and Observable in Angular?  
 Add to PDF Mid
Q39: What's new in Angular 6 and why shall we upgrade to it?  
 Add to PDF Mid
Q40: What is Protractor?  
 Add to PDF Mid
Q41: What is Subscribing?  
 Add to PDF Mid
Q42: What is Router Outlet?  
 Add to PDF Mid
Q43: What is Router State?  
 Add to PDF Mid
Q44: What is Angular Universal?  
 Add to PDF Mid
Q45: What is Bazel?  
 Add to PDF Mid
Q46: Why would you use a spy in a test?  
 Add to PDF Mid
Q47: Why Incremental DOM has low memory footprint?  
 Add to PDF Mid
Q48: What happens if you use <script> tag inside template?  
 Add to PDF Mid
Q49: What is Redux and how does it relate to an Angular app?  
 Add to PDF Mid
Q50: What is AOT?  
 Add to PDF Mid
Q51: Can you explain the difference between Promise and Observable in Angular? In what scenario can we use each case?  
 Add to PDF Mid
Q52: Explain the difference between Constructor and ngOnInit  
 Add to PDF Mid
Q53: What are the utility functions provided by RxJS?  
 Add to PDF Mid
Q54: What is Activated route?  
 Add to PDF Mid
Q55: Do I always need a Routing Module?  
 Add to PDF Mid
Q56: What is a Parameterized pipe?  
 Add to PDF Mid
Q57: What is TestBed?  
 Add to PDF Mid
Q58: What are the ways to control AOT compilation?  
 Add to PDF Mid
Q59: Explain Lazy Loading in Angular?  
 Add to PDF Mid
Q60: What is Zone in Angular?  
 Add to PDF Senior
Q61: How do you create application to use scss?  
 Add to PDF Senior
Q62: How would you insert an embedded view from a prepared TemplateRef?  
 Add to PDF Senior
Q63: Why do we need compilation process in Angular?  
 Add to PDF Senior
Q64: Explain the purpose of Service Workers in Angular  
 Add to PDF Senior
Q65: What is the need for SystemJS in Angular?  
 Add to PDF Senior
Q66: What is Reactive Programming and how does it relate to Angular?  
 Add to PDF Senior
Q67: Are there any pros/cons (especially performance-wise) in using local storage to replace cookie functionality?  
 Add to PDF Senior
Q68: What is Ivy Renderer?  
 Add to PDF Senior
Q69: What are the lifecycle hooks for components and directives?  
 Add to PDF Senior
Q70: What would be a good use for NgZone service?  
 Add to PDF Senior
Q71: What is the difference between pure and impure pipe?  
 Add to PDF Senior
Q72: What is Incremental DOM? How is it different from Virtual DOM?  
 Add to PDF Senior
Q73: How to detect a route change in Angular?  
 Add to PDF Senior
Q74: Name some security best practices in Angular  
 Add to PDF Senior
Q75: What are the advantages with AOT?  
 Add to PDF Senior
Q76: Why we should use Bazel for Angular builds?  
 Add to PDF Senior
Q77: Name and explain some Angular Module Loading examples  
 Add to PDF Senior
Q78: What does detectChanges do in Angular Jasmine tests?  
 Add to PDF Senior
Q79: What are the mapping rules between Angular component and custom element?  
 Add to PDF Senior
Q80: Do I need to bootstrap custom elements?  
 Add to PDF Senior
Q81: When does a lazy loaded module is loaded?  
 Add to PDF Senior
Q82: What does a just-in-time (JIT) compiler do (in general)?  
 Add to PDF Senior
Q83: Why would you use lazy loading modules in Angular app?  
 Add to PDF Senior
Q84: Why would you use renderer methods instead of using native element methods?  
 Add to PDF Senior
Q85: What is ngUpgrage?  
 Add to PDF Senior
Q86: Angular 9: What are some new features in Angular 9?  
 Add to PDF Senior
Q87: What is difference between Incremental DOM and Virtual DOM? Related To: React
Add to PDF Senior
Q88: What are observable creation functions?  
 Add to PDF Expert
Q89: When to use query parameters versus matrix parameters in Url?  
 Add to PDF Expert
Q90: Name some differences between SystemJS vs webpack? Related To: Webpack
Add to PDF Expert
Q91: Why did the Google team go with incremental DOM instead of virtual DOM?  
 Add to PDF Expert
Q92: What is the difference between BehaviorSubject vs Observable?  
 Add to PDF Expert
Q93: Is there no equivalent to $scope.emit() or $scope.broadcast() in Angular?  
 Add to PDF Expert
Q94: How Would You Compare View Engine vs Ivy?  
 Add to PDF Expert
Q95: Why Incremental DOM is Tree Shakable?  
 Add to PDF Expert
Q96: Why Angular uses Url segment?  
 Add to PDF Expert
Q97: Just-in-Time (JIT) vs Ahead-of-Time (AOT) compilation. Explain the difference.  
 Add to PDF Expert
Q98: What is Locality principle for Ivy?  
 Add to PDF Expert
Q99: Do you know how you can run AngularJS and Angular side by side?  
 Add to PDF Expert
Q100: Could you provide some particular examples of using ngZone?  
 Add to PDF Expert
Q101: How would you extract webpack config from angular cli project?  
 Add to PDF Expert
Q102: How does Ivy affect the (Re)build time?  
 Add to PDF Expert
Q103: Angular 8: What are some changes in Location module?  
 Add to PDF Expert
Q104: Angular 9: Explain improvements in Tree-Shaking  
 Add to PDF Expert
Code Challenges
Q1: What are Pipes? Give me an example.  
 Add to PDF Entry
Q2: What does this line do?  
 Add to PDF Junior
Q3: How can I select an element in a component template?  
 Add to PDF Junior
Q4: How to bundle an Angular app for production?  
 Add to PDF Mid
Q5: How would you control size of an element on resize of the window in a component?  
 Add to PDF Mid
Q6: Could I use jQuery with Angular?  
 Add to PDF Senior
Q7: How to set headers for every request in Angular?  
 Add to PDF Senior
Q8: What is the Angular equivalent to an AngularJS $watch?
