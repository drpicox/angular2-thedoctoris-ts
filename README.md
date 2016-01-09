NG2 - The Doctor Is - Typescript
================================

This is a initial demo of an scalable Angular2 Application.

Note: You may be interested in the ES5 version at https://github.com/drpicox/angular2-thedoctoris-es5.

Description
-----------

### Behavior

This demo has only one component: [TheDoctorIsComponent](src/thedoctoris/TheDoctorIsComponent.ts)

```html
<tdi-the-doctor-is></tdi-the-doctor-is>
```

that shows a text if the doctor is in or not.


It also defines two services, one is the [Doctor](src/thedoctoris/Doctor.ts) and the other one a [Booth](src/thedoctoris/Booth.ts). 
When the component is instantated it uses the `Booth` to call which makes the `Doctor` come.

This example shows DI from services to services and services to Components.


### Module

It also defines a module [thedoctoris](src/thedoctoris/index.ts) which exports all public elements: 

- `TheDoctorIsComponent`
- and `THEDOCTORIS_PROVIDERS` which lists the providers needed to work properly


### Boot

Everything is compiled through browserify. 
The boot is executed by the [index.html](src/index.html) which executes:

```html
<script>
   window.boot();
</script>

The boot is defined in the [boot.ts](src/boot.ts) file and attached to window by the main [index.ts](src/index.ts) script.
