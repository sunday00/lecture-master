<div class="container">
  <h2 class="text-info">Add</h2>

  <?php $fm = $this->Flash->render() ?>
  <?php if ( $fm ) : ?>
  <div class="alert alert-danger" role="alert">
      <?= $fm ?>
      <?= $this->fetch('content') ?>
      <?= $this->Html->link(__('Back'), 'javascript:history.back()') ?>
  </div>
  <?php endif ?>

  <?= $this->Form->create() ?>
    
      <?= $this->csrf() ?>
      <?= $this->Form->control('username', ['type' => 'text', 'required' => true]); ?>
      <?= $this->Form->control('email', ['type' => 'email', 'required' => true]); ?>
      <?= $this->Form->control('password', ['type' => 'password', 'required' => true]); ?>
      <?= $this->Form->control('image_file', ['type' => 'file', 'required' => false]); ?>
      <?= $this->Form->submit('submit', ['class' => 'btn btn-primary mt-4']); ?>
    
  <?= $this->Form->end() ?>
</div> 