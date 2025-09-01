using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class TodoController : ControllerBase
{
    private readonly TodoService _todoService;

    public TodoController(TodoService todoService)
    {
        _todoService = todoService;
    }

    [HttpGet(Name = "GetTodo")]

    public async Task<ActionResult<IEnumerable<TodoItem>>> GetAll()
    {
        var todos = await _todoService.GetAllAsync();
        return Ok(todos);
    }


    [HttpPost(Name = "PostTodo")]
    public async Task<ActionResult> Post(TodoItem item)
    {
        await _todoService.CreateAsync(item);
        return CreatedAtAction(nameof(GetAll), new { id = item.Id }, item);
    }
    
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        var existing = await _todoService.GetByIdAsync(id);
        if (existing == null)
            return NotFound();

        await _todoService.DeleteAsync(id);
        return NoContent();
    }
}
