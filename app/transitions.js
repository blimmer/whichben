export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('found-ben'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
